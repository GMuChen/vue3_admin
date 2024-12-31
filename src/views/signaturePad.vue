<template>
  <div class="c_box layout">
    <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing" @mouseout="stopDrawing"
      @touchstart="startDrawing" @touchmove="draw" @touchend="stopDrawing" @touchcancel="stopDrawing"></canvas>
    <div class="btnGroup">
      <el-button type="primary" @click="cancel">撤销</el-button>
      <el-button type="primary" @click="clear">清除</el-button>
      <el-button type="primary" @click="exportPng">导出png格式</el-button>
    </div>
  </div>
</template>

<script setup>
let ctx = ref(null)
let canvas = ref(null)
let drawing = ref(false)
let strokes = ref([])

onMounted(() => {
  initEvent()
})

const initEvent = () => {
  let { width } = canvas.value.parentElement.getBoundingClientRect()
  canvas.value.width = width - 40;
  canvas.value.height = 500;
  ctx.value = canvas.value.getContext('2d');
}

// 撤销
const cancel = () => {
  if (strokes.value.length === 0) return;
  strokes.value.pop();
  if (strokes.value.length > 0) {
    const lastStroke = strokes.value[strokes.value.length - 1];
    const img = new Image();
    img.src = lastStroke;
    img.onload = () => {
      ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
      ctx.value.drawImage(img, 0, 0);
    };
  } else {
    clear();
  }
}

// 清除
const clear = () => {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
}

// 导出png格式
const exportPng = () => {
  const dataURL = canvas.value.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'signature.png';
  link.click();
}

// 开始
function startDrawing(e) {
  drawing.value = true;
  ctx.value.beginPath();
  ctx.value.moveTo(e.offsetX || e.touches[0].clientX - canvas.value.offsetLeft, e.offsetY || e.touches[0].clientY - canvas.value.offsetTop);
}

// 移动
function draw(e) {
  if (drawing.value) {
    ctx.value.lineTo(e.offsetX || e.touches[0].clientX - canvas.value.offsetLeft, e.offsetY || e.touches[0].clientY - canvas.value.offsetTop);
    ctx.value.stroke();
  }
}

// 结束
function stopDrawing() {
  if (drawing.value) {
    strokes.value.push(canvas.value.toDataURL('image/png'))
  }
  drawing.value = false;
}
</script>
<style scoped lang="scss">
.c_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F2F3F5;

  canvas {
    border: 1px solid #ccc;
    background: #fff;
  }

  .btnGroup {
    margin-top: 20px;
  }
}
</style>