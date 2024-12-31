<template>
  <div class="layout">
    <div class="text" v-html="htmlStr"></div>
  </div>
</template>
<script setup>
import { pinyin, html } from "pinyin-pro";
import { story } from '@/assets/json/text.js'

let htmlStr = ref(html(story))

function isCinese(char) {
  return /[\u4e00-\u9fa5]/.test(char);
}

// onMounted(() => {
//   init()
// })

const init = () => {
  // let arr = pinyin(story, { type: 'array' })
  // let str = ''
  // for (let i = 0; i < story.length; i++) {
  //   let element = story[i]
  //   if (isCinese(element)) {
  //     str += `<ruby>${element}<rp>(</rp><rt>${arr[i]}</rt><rp>)</rp></ruby>`
  //   } else if (element === '\n') {
  //     str += '<br>'
  //   } else {
  //     str += element
  //   }
  // }
  htmlStr.value = html(story)
}
</script>
<style scoped lang="scss">
.text {
  font-size: 24px;
  line-height: 50px;
  text-indent: 2em;

  :deep(ruby) {
    margin-right: 5px;

    rt {
      color: red;
    }
  }
}
</style>