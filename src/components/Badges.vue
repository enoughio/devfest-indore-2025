<template>
  <div class="badge-container">
    <!-- LEFT SIDE -->
    <div class="left">
      <h1>Badge</h1>
      <p>Upload an image and generate a personalized badge with the DevFest frame.</p>

      <p class="label">Select an Image</p>
      <button class="upload-btn" @click="triggerFileInput">Upload Image ⬆️</button>

      <input ref="fileInput" type="file" accept="image/*" hidden @change="onUpload" />

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

        <button v-if="showDownload" class="download-btn" @click="downloadImage">Download Badge ⬇️</button>
      </div>
    </div>
  </div>
</template>

    <script setup>
    import { ref, onMounted, watch } from 'vue'
    import frameUrl from '../assets/badge.png'

    const canvas = ref(null)
    const fileInput = ref(null)
    const showDownload = ref(false)
    const frameLoaded = ref(false)
    const frameImg = new Image()
    frameImg.src = frameUrl
    frameImg.onload = () => (frameLoaded.value = true)

    const shapes = ['original', 'square', 'circle']
    const selectedShape = ref('original')
    const userImgRef = ref(null)

    function triggerFileInput() {
      if (fileInput.value && fileInput.value.click) fileInput.value.click()
    }

    function getFrameRect(canvasW, canvasH) {
        // returns {x,y,w,h} to draw frame depending on selectedShape
        if (selectedShape.value === 'circle') {
          const diameter = Math.round(Math.min(canvasW, canvasH) * 0.92)
          const w = diameter
          let h = Math.round((frameImg.height * w) / frameImg.width)
          if (h > diameter) h = diameter
          const x = Math.round((canvasW - w) / 2)
          const cy = Math.round(canvasH / 2)
          const y = Math.round(cy + diameter / 2 - h)
          return { x, y, w, h }
        }

        if (selectedShape.value === 'square') {
          const size = Math.round(Math.min(canvasW, canvasH) * 0.92)
          const w = size
          let h = Math.round((frameImg.height * w) / frameImg.width)
          if (h > size) h = size
          const x = Math.round((canvasW - w) / 2)
          const yTop = Math.round((canvasH - size) / 2)
          const y = Math.round(yTop + size - h)
          return { x, y, w, h }
        }

        // original: full width, bottom aligned to canvas bottom
        const w = canvasW
        const h = Math.round((frameImg.height * w) / frameImg.width)
        return { x: 0, y: canvasH - h, w, h }
      }

      function drawFrameOnly() {
        const c = canvas.value
        if (!c) return
        const ctx = c.getContext('2d')
        ctx.clearRect(0, 0, c.width, c.height)
        ctx.fillStyle = '#ffffff00'
        ctx.fillRect(0, 0, c.width, c.height)

        const rect = getFrameRect(c.width, c.height)
        const off = document.createElement('canvas')
        off.width = rect.w
        off.height = rect.h
        const offCtx = off.getContext('2d')
        if (frameLoaded.value) {
          offCtx.clearRect(0, 0, off.width, off.height)
          offCtx.drawImage(frameImg, 0, 0, off.width, off.height)
          ctx.drawImage(off, rect.x, rect.y, rect.w, rect.h)
        } else {
          const f = new Image()
          f.src = frameUrl
          f.onload = () => {
            offCtx.clearRect(0, 0, off.width, off.height)
            offCtx.drawImage(f, 0, 0, off.width, off.height)
            ctx.drawImage(off, rect.x, rect.y, rect.w, rect.h)
          }
        }

        // if circle is selected but no user image, draw circle placeholder/stroke
        ctx.save()
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = Math.max(6, Math.round(c.width * 0.01))
        if (selectedShape.value === 'circle') {
          const diameter = Math.round(Math.min(c.width, c.height) * 0.92)
          const radius = Math.round(diameter / 2)
          ctx.beginPath()
          ctx.arc(c.width / 2, c.height / 2, radius - ctx.lineWidth / 2, 0, Math.PI * 2)
          ctx.stroke()
        } else if (selectedShape.value === 'square') {
          const size = Math.round(Math.min(c.width, c.height) * 0.92)
          const x = Math.round((c.width - size) / 2)
          const y = Math.round((c.height - size) / 2)
          const r = Math.round(size * 0.04)
          ctx.beginPath()
          ctx.moveTo(x + r, y)
          ctx.lineTo(x + size - r, y)
          ctx.quadraticCurveTo(x + size, y, x + size, y + r)
          ctx.lineTo(x + size, y + size - r)
          ctx.quadraticCurveTo(x + size, y + size, x + size - r, y + size)
          ctx.lineTo(x + r, y + size)
          ctx.quadraticCurveTo(x, y + size, x, y + size - r)
          ctx.lineTo(x, y + r)
          ctx.quadraticCurveTo(x, y, x + r, y)
          ctx.closePath()
          ctx.stroke()
        }
        ctx.restore()
      }

  

function drawUserImage(ctx, img, W, H, keepClip = false) {
  const imgRatio = img.width / img.height
  const canvasRatio = W / H

  let renderW, renderH, startX, startY

  if (imgRatio > canvasRatio) {
    renderH = H
    renderW = renderH * imgRatio
    startX = -(renderW - W) / 2
    startY = 0
  } else {
    renderW = W
    renderH = renderW / imgRatio
    startX = 0
    startY = -(renderH - H) / 2
  }

  // Apply clipping based on selected shape (only if keepClip true)
  let clipped = false
  if (keepClip && selectedShape.value === 'circle') {
    ctx.save()
    ctx.beginPath()
    const radius = Math.min(W, H) / 2
    ctx.arc(W / 2, H / 2, radius, 0, Math.PI * 2)
    ctx.clip()
    clipped = true
  } else if (keepClip && selectedShape.value === 'square') {
    ctx.save()
    const size = Math.round(Math.min(W, H) * 0.92)
    const x = Math.round((W - size) / 2)
    const y = Math.round((H - size) / 2)
    const r = Math.round(size * 0.04)
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.lineTo(x + size - r, y)
    ctx.quadraticCurveTo(x + size, y, x + size, y + r)
    ctx.lineTo(x + size, y + size - r)
    ctx.quadraticCurveTo(x + size, y + size, x + size - r, y + size)
    ctx.lineTo(x + r, y + size)
    ctx.quadraticCurveTo(x, y + size, x, y + size - r)
    ctx.lineTo(x, y + r)
    ctx.quadraticCurveTo(x, y, x + r, y)
    ctx.closePath()
    ctx.clip()
    clipped = true
  }

  ctx.drawImage(img, startX, startY, renderW, renderH)

  if (clipped && !keepClip) ctx.restore()
}

function drawPreviewFromImage(img) {
  const c = canvas.value
  if (!c) return
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, c.width, c.height)

  // If circle: mask ONLY the user image to a circle, draw the frame normally (unclipped)
  if (selectedShape.value === 'circle') {
    // prepare an offscreen canvas with the user image drawn to cover
    const off = document.createElement('canvas')
    off.width = c.width
    off.height = c.height
    const octx = off.getContext('2d')

    // compute cover sizing
    const imgRatio = img.width / img.height
    const canvasRatio = c.width / c.height
    let renderW, renderH, startX, startY
    if (imgRatio > canvasRatio) {
      renderH = c.height
      renderW = renderH * imgRatio
      startX = -(renderW - c.width) / 2
      startY = 0
    } else {
      renderW = c.width
      renderH = renderW / imgRatio
      startX = 0
      startY = -(renderH - c.height) / 2
    }

    octx.drawImage(img, startX, startY, renderW, renderH)

    // mask to circle (destination-in keeps only circle area)
    octx.globalCompositeOperation = 'destination-in'
    octx.beginPath()
    const diameter = Math.round(Math.min(c.width, c.height) * 0.92)
    const radius = Math.round(diameter / 2)
    octx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2)
    octx.closePath()
    octx.fill()
    octx.globalCompositeOperation = 'source-over'

    // draw masked user image to main canvas
    ctx.drawImage(off, 0, 0)

    // draw frame normally (not clipped)
    const rect = getFrameRect(c.width, c.height)
    const frameOff = document.createElement('canvas')
    frameOff.width = rect.w
    frameOff.height = rect.h
    const fctx = frameOff.getContext('2d')
    if (frameLoaded.value) {
      fctx.drawImage(frameImg, 0, 0, rect.w, rect.h)
      ctx.drawImage(frameOff, rect.x, rect.y, rect.w, rect.h)
    } else {
      const f = new Image()
      f.src = frameUrl
      f.onload = () => {
        fctx.drawImage(f, 0, 0, rect.w, rect.h)
        ctx.drawImage(frameOff, rect.x, rect.y, rect.w, rect.h)
      }
    }

    // draw white stroke around the circular image
    ctx.save()
    ctx.strokeStyle = '#ffffff'
    const strokeW = Math.max(6, Math.round(c.width * 0.01))
    ctx.lineWidth = strokeW
    ctx.beginPath()
    ctx.arc(c.width / 2, c.height / 2, radius - strokeW / 2, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
    return
  }

  // original: no clip
  drawUserImage(ctx, img, c.width, c.height)
  if (frameLoaded.value) {
    const scaledH = Math.round((frameImg.height * c.width) / frameImg.width)
    ctx.drawImage(frameImg, 0, c.height - scaledH, c.width, scaledH)
  } else {
    const f = new Image()
    f.src = frameUrl
    f.onload = () => {
      const scaledH = Math.round((f.height * c.width) / f.width)
      ctx.drawImage(f, 0, c.height - scaledH, c.width, scaledH)
    }
  }
}

function onUpload(e) {
  const file = e.target.files[0]
  if (!file) return

  const c = canvas.value
  const ctx = c.getContext('2d')

  const userImg = new Image()
  const reader = new FileReader()

  reader.onload = (ev) => {
    userImg.onload = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      userImgRef.value = userImg
      drawUserImage(ctx, userImg, c.width, c.height)

      if (frameLoaded.value) {
        const scaledH = Math.round((frameImg.height * c.width) / frameImg.width)
        ctx.drawImage(frameImg, 0, c.height - scaledH, c.width, scaledH)
        showDownload.value = true
      } else {
        const f = new Image()
        f.src = frameUrl
        f.onload = () => {
          const scaledH = Math.round((f.height * c.width) / f.width)
          ctx.drawImage(f, 0, c.height - scaledH, c.width, scaledH)
          showDownload.value = true
        }
        f.onerror = () => {
          showDownload.value = true
        }
      }
    }
    userImg.src = ev.target.result
  }
  reader.readAsDataURL(file)
}

function downloadImage() {
  const src = canvas.value
  if (!src) return

  const W = src.width
  const H = src.height

  // create temp canvas and draw current
  const temp = document.createElement('canvas')
  temp.width = W
  temp.height = H
  const tctx = temp.getContext('2d')
  tctx.drawImage(src, 0, 0)

  // export current canvas content as-is (user image is already masked in preview)

  const finalC = document.createElement('canvas')
  finalC.width = W
  finalC.height = H
  const fctx = finalC.getContext('2d')
  fctx.drawImage(temp, 0, 0)

  const a = document.createElement('a')
  a.href = finalC.toDataURL('image/png')
  a.download = 'badge.png'
  a.click()
}

onMounted(() => {
  drawFrameOnly()
  frameImg.onload = () => drawFrameOnly()

  watch(selectedShape, () => {
    if (userImgRef.value) drawPreviewFromImage(userImgRef.value)
    else drawFrameOnly()
  })
})
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
