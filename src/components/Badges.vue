

<template>
  <div class="badge-container">
    
    <!-- LEFT SIDE -->
    <div class="left">
      <h1>Badge</h1>
      <p>Upload an image and generate a personalized badge with the DevFest frame.</p>

      <p class="label">Select an Image</p>
      <button class="upload-btn" @click="triggerFileInput">
        Upload Image ⬆️
      </button>

      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        hidden
        @change="onUpload"
      />

      <p class="label">Image Shape</p>
      <div class="shape-row">
        <button
          v-for="shape in shapes"
          :key="shape"
          :class="['shape-btn', { active: shape === selectedShape }]"
          @click="selectedShape = shape"
        >
          {{ shape.toUpperCase() }}
        </button>
      </div>

      <p class="privacy">* We respect your privacy and do not store your images.</p>
    </div>

    <!-- RIGHT SIDE -->
    <div class="right">
      <div class="preview-box">
        <div
          class="preview-viewport"
          :class="[`shape-${selectedShape}`]"
        >
          <canvas class="preview-canvas" ref="canvas" width="1080" height="1350"></canvas>
        </div>

        <button
          v-if="showDownload"
          class="download-btn"
          @click="downloadImage"
        >
          Download Badge ⬇️
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>

import { ref, onMounted } from "vue";
import frameUrl from "../assets/badge.png";

const canvas = ref(null);
const fileInput = ref(null);
const showDownload = ref(false);
const hasImage = ref(false);
const frameLoaded = ref(false);
const frameImg = new Image();
frameImg.src = frameUrl;
frameImg.onload = () => (frameLoaded.value = true);

const shapes = ["original", "square", "circle"];
const selectedShape = ref("original");

function onUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const c = canvas.value;
  const ctx = c.getContext("2d");

  const userImg = new Image();
  const reader = new FileReader();

  reader.onload = (e) => {
    userImg.onload = () => {
      ctx.clearRect(0, 0, c.width, c.height);

      drawUserImage(ctx, userImg, c.width, c.height);

      // Draw bottom frame (use preloaded frameImg so Vite resolves path)
      if (frameLoaded.value) {
        const scaledH = Math.round((frameImg.height * c.width) / frameImg.width);
        ctx.drawImage(frameImg, 0, c.height - scaledH, c.width, scaledH);
        showDownload.value = true;
      } else {
        // if frame isn't loaded yet, attempt to draw it and still enable download
        const f = new Image();
        f.src = frameUrl;
        f.onload = () => {
          const scaledH = Math.round((f.height * c.width) / f.width);
          ctx.drawImage(f, 0, c.height - scaledH, c.width, scaledH);
          showDownload.value = true;
        };
        f.onerror = () => {
          showDownload.value = true;
        };
      }

      // flag used to adjust preview height/styles
      hasImage.value = true;
    };
    userImg.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

function triggerFileInput() {
  if (fileInput.value && fileInput.value.click) fileInput.value.click();
}

function drawFrameOnly() {
  const c = canvas.value;
  if (!c) return;
  const ctx = c.getContext("2d");
  // keep canvas transparent (preview box provides visible background)
  ctx.clearRect(0, 0, c.width, c.height);

  if (frameLoaded.value) {
    const scaledH = Math.round((frameImg.height * c.width) / frameImg.width);
    ctx.drawImage(frameImg, 0, c.height - scaledH, c.width, scaledH);
  } else {
    // try to draw even if not loaded yet
    const f = new Image();
    f.src = frameUrl;
    f.onload = () => {
      const scaledH = Math.round((f.height * c.width) / f.width);
      ctx.drawImage(f, 0, c.height - scaledH, c.width, scaledH);
    };
  }
}

onMounted(() => {
  // Ensure frame is visible even before any upload
  drawFrameOnly();
  // If frame loads later, redraw to ensure crispness
  frameImg.onload = () => drawFrameOnly();
});

function drawUserImage(ctx, img, W, H) {
  const imgRatio = img.width / img.height;
  const canvasRatio = W / H;

  let renderW, renderH, startX, startY;

  if (imgRatio > canvasRatio) {
    renderH = H;
    renderW = renderH * imgRatio;
    startX = -(renderW - W) / 2;
    startY = 0;
  } else {
    renderW = W;
    renderH = renderW / imgRatio;
    startX = 0;
    startY = -(renderH - H) / 2;
  }

  ctx.drawImage(img, startX, startY, renderW, renderH);
}

function downloadImage() {
  const src = canvas.value;
  if (!src) return;

  const W = src.width;
  const H = src.height;
  // corner radius for rectangle/original download (keep subtle like preview)
  const cornerRadius = 24;

  // 1) Create a temporary canvas and draw the current canvas into it
  const temp = document.createElement("canvas");
  temp.width = W;
  temp.height = H;
  const tctx = temp.getContext("2d");
  tctx.drawImage(src, 0, 0);

  // 2) Apply mask based on selected shape
  tctx.globalCompositeOperation = "destination-in";
  tctx.beginPath();
  if (selectedShape.value === "circle") {
    // perfect circle centered in the canvas using min dimension
    const r = Math.min(W, H) / 2;
    tctx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
  } else if (selectedShape.value === "square" || selectedShape.value === "original") {
    // centered rounded square using min(W, H)
    const size = Math.min(W, H);
    const x = (W - size) / 2;
    const y = (H - size) / 2;
    const r = Math.max(0, Math.min(cornerRadius, size / 10));
    tctx.moveTo(x + r, y);
    tctx.lineTo(x + size - r, y);
    tctx.quadraticCurveTo(x + size, y, x + size, y + r);
    tctx.lineTo(x + size, y + size - r);
    tctx.quadraticCurveTo(x + size, y + size, x + size - r, y + size);
    tctx.lineTo(x + r, y + size);
    tctx.quadraticCurveTo(x, y + size, x, y + size - r);
    tctx.lineTo(x, y + r);
    tctx.quadraticCurveTo(x, y, x + r, y);
  }
  tctx.closePath();
  tctx.fillStyle = "#fff";
  tctx.fill();
  tctx.globalCompositeOperation = "source-over";

  // 3) Create final canvas (transparent background) and draw masked image on top
  const finalC = document.createElement("canvas");
  finalC.width = W;
  finalC.height = H;
  const fctx = finalC.getContext("2d");
  // leave background transparent so exported PNG has transparency
  fctx.drawImage(temp, 0, 0);

  // 4) Export
  const a = document.createElement("a");
  a.href = finalC.toDataURL("image/png");
  a.download = "badge.png";
  a.click();
}
</script>

<style scoped>
.badge-container {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
  margin: 3.5rem auto 0;
  max-width: 980px;
  box-sizing: border-box;
  justify-content: center;

  font-family: "Google Sans", sans-serif;
}

.left {
  box-sizing: border-box;
  flex: 1 1 340px;
  max-width: 560px;
}

.right {
  box-sizing: border-box;
  flex: 1 1 420px;
  display: flex;
  justify-content: center;
}

/* Centering adjustments for tablet and smaller screens */
@media (max-width: 920px) {
  .badge-container {
    padding: 1.25rem;
    gap: 1.25rem;
  }

  /* Keep the columns centered as a block */
  .left,
  .right {
    width: 100%;
    max-width: none; /* allow full width like other content */
    margin: 0 auto;
  }

  .preview-box {
    /* Full width of content on mobile, keep square via aspect-ratio */
    margin: 0 auto;
    width: 100%;
    min-width: 350px;
    aspect-ratio: 1 / 1;
    --box-size: 100%;
  }

  /* Let inner viewport use almost all space on mobile for a bolder look */
  .preview-viewport { width: 100%; height: 100%; }
}

.label {
  margin-top: 1.2rem;
  font-weight: 600;
}

.upload-btn {
  background: #ffd427;
  border: 1.5px solid black;
  padding: 0.7rem 1.4rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
}

.shape-row {
  margin-top: 0.6rem;
  border: 1.5px solid black;
  display: flex;
  border-radius: 50px;
  overflow: hidden;
}

.shape-btn {
  flex: 1;
  padding: 0.6rem;
  border: none;
  background: transparent;
  cursor: pointer;
}

.shape-btn.active {
  background: #eee;
}

.privacy {
  margin-top: 1rem;
  color: #777;
}

.preview-box {
  background: #eee;
  padding: 10px;
  border: 2px solid black;
  border-radius: 20px;
  text-align: center;
  /* Responsive square container: min 260px, max 520px */
  /* --box-size: clamp(260px, 52vw, 520px); */
  /* width: var(--box-size); */
  /* height: var(--box-size); */
  box-sizing: border-box;
}

/* Viewport controlling the visible shape */
.preview-viewport {
  /* Scale with the box keeping generous padding */
  width: 82%;
  height: 82%;
  overflow: hidden;
  background: #fff;
  margin: auto;
  border-radius: 20px; /* default rounded rect */
  display: flex;
}

/* Square (rounded) */
.preview-viewport.shape-square { border-radius: 20px; }

/* Circle */
.preview-viewport.shape-circle { border-radius: 50%; }

/* Original should look same as square */
.preview-viewport.shape-original {
  width: 82%;
  height: 82%;
  border-radius: 20px;
}

.preview-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.download-btn {
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  border: 1.5px solid black;
  border-radius: 30px;
  background: white;
  cursor: pointer;
  font-weight: 600;
}
</style>
