<script setup lang="ts">
import { ref } from 'vue'
import Editor from './components/VueEasyMDE.vue'
const test = ref('initial value')
const editor = ref<any>('')
setTimeout(() => {
  test.value = '**updated**'
}, 2000)
const clear = () => {
  console.log(editor.value.getInstance())
  editor.value.clear()
}
const onBlur = () => {
  alert(1)
}
</script>

<template>
  <h1>Vue3 component wrapper for EasyMDE</h1>
  <button @click="clear">Clear Value</button>
  <button @click="test = '## new value'">Set Value</button>
  <Editor v-model="test" ref="editor" @blur="onBlur"/>
</template>

<style>

</style>
