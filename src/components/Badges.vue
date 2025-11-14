

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
        <canvas ref="canvas" width="1080" height="1350"></canvas>

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
  // keep canvas transparent
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

  if (selectedShape.value === "circle") {
    ctx.save();
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, W / 2, 0, Math.PI * 2);
    ctx.clip();
  }

  ctx.drawImage(img, startX, startY, renderW, renderH);

  if (selectedShape.value === "circle") ctx.restore();
}

function downloadImage() {
  const src = canvas.value;
  if (!src) return;

  const W = src.width;
  const H = src.height;
  const radius = Math.round(Math.min(W, H) * 0.05); // ~3% corner radius

  // Create a temporary canvas and draw the current canvas into it
  const temp = document.createElement("canvas");
  temp.width = W;
  temp.height = H;
  const tctx = temp.getContext("2d");
  tctx.drawImage(src, 0, 0);

  // Mask the temp canvas to a rounded rectangle 
  tctx.globalCompositeOperation = "destination-in";
  tctx.beginPath();
  // rounded rect path
  tctx.moveTo(radius, 0);
  tctx.lineTo(W - radius, 0);
  tctx.quadraticCurveTo(W, 0, W, radius);
  tctx.lineTo(W, H - radius);
  tctx.quadraticCurveTo(W, H, W - radius, H);
  tctx.lineTo(radius, H);
  tctx.quadraticCurveTo(0, H, 0, H - radius);
  tctx.lineTo(0, radius);
  tctx.quadraticCurveTo(0, 0, radius, 0);
  tctx.closePath();
  tctx.fillStyle = "#fff";
  tctx.fill();
  tctx.globalCompositeOperation = "source-over";

  // Create final canvas and draw masked image on top
  const finalC = document.createElement("canvas");
  finalC.width = W;
  finalC.height = H;
  const fctx = finalC.getContext("2d");
  // leave background transparent 
  fctx.drawImage(temp, 0, 0);

  // Export
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
  width: 350px;
  box-sizing: border-box;
}

.right {
  width: 450px;
  box-sizing: border-box;
}

/* Centering adjustments for tablet and smaller screens */
@media (max-width: 920px) {
  .badge-container {
    padding: 1.25rem;
    gap: 1.25rem;
  }


  .left,
  .right {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  .preview-box {
    margin: 0 auto;
  }
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
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
  text-align: center;
}

canvas {
  width: 100%;
  border-radius: 20px;
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
