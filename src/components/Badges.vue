<template>
  <div class="badge-container">
    <div class="badge-left">
      <h1>Badge</h1>
      <p class="subtitle">
        Upload an image and generate a personalized badge with the DevFest frame.
      </p>

      <p class="label">Select an Image</p>
      <button class="upload-btn" @click="triggerFileInput">
        Upload Image
        <span class="icon">⬆️</span>
      </button>

      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        hidden
        @change="onImageUpload"
      />

      <p class="label">Image Shape</p>
      <div class="shape-toggle">
        <button
          v-for="shape in shapes"
          :key="shape"
          :class="['shape-btn', { active: selectedShape === shape }]"
          @click="selectedShape = shape"
        >
          {{ shape.toUpperCase() }}
        </button>
      </div>

      <p class="privacy-note">
        * We respect your privacy and are not storing your pictures on our servers.
      </p>
    </div>

    <div class="badge-right">
      <div class="canvas-wrapper">
        <canvas ref="canvas" width="500" height="500"></canvas>
        <button
          v-if="showDownload"
          class="download-btn"
          @click="downloadBadge"
        >
          ⬇️ Download
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const canvas = ref(null)
const showDownload = ref(false)
const selectedShape = ref('original')

const shapes = ['original', 'square', 'circle']

function triggerFileInput() {
  fileInput.value.click()
}

function onImageUpload(event) {
  const file = event.target.files[0]
  if (!file) return

  const ctx = canvas.value.getContext('2d')
  const img = new Image()
  const reader = new FileReader()

  reader.onload = e => {
    img.onload = () => {
      const c = canvas.value
      ctx.clearRect(0, 0, c.width, c.height)

      // Draw uploaded image
      if (selectedShape.value === 'circle') {
        ctx.save()
        ctx.beginPath()
        ctx.arc(c.width / 2, c.height / 2, c.width / 2, 0, Math.PI * 2)
        ctx.closePath()
        ctx.clip()
      }
      ctx.drawImage(img, 0, 0, c.width, c.height)
      if (selectedShape.value === 'circle') ctx.restore()

      // Add simple frame
      const frame = new Image()
      frame.src = '/devfest-frame.png' // put your frame asset in /public
      frame.onload = () => {
        ctx.drawImage(frame, 0, 0, c.width, c.height)
      }

      showDownload.value = true
    }
    img.src = e.target.result
  }

  reader.readAsDataURL(file)
}

function downloadBadge() {
  const link = document.createElement('a')
  link.download = 'devfest-badge.png'
  link.href = canvas.value.toDataURL()
  link.click()
}
</script>

<style scoped>
.badge-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 4rem;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  font-family: "Google Sans", Arial, sans-serif;
  color: #1f1f1f;
}

.badge-left {
  flex: 0 1 420px;
  min-width: 300px;
}

.badge-right {
  flex: 0 1 420px;
  min-width: 320px;
  display: flex;
  justify-content: center;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.subtitle {
  margin-bottom: 1.5rem;
  color: #444;
}

.label {
  margin-top: 1.5rem;
  font-weight: 500;
}

.upload-btn {
  background-color: #ffd427;
  border: 1.5px solid #1e1e1e;
  border-radius: 999px;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.7rem;
  transition: 0.2s;
}

.upload-btn:hover {
  background-color: #ffce00;
}

.shape-toggle {
  display: flex;
  margin-top: 0.7rem;
  border: 1.5px solid #1e1e1e;
  border-radius: 999px;
  overflow: hidden;
}

.shape-btn {
  flex: 1;
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
}

.shape-btn.active {
  background-color: #eee;
}

.canvas-wrapper {
  background: #eee;
  border: 1.5px solid #000;
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
}

canvas {
  width: 100%;
  border-radius: 12px;
}

.download-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid #1e1e1e;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
}

.download-btn:hover {
  background-color: #f3f3f3;
}

.privacy-note {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
}
</style>
