<script setup lang="ts">
import { ref } from 'vue'
import Editor from './components/VueEasyMDE.vue'
import type { EditorInstance } from './types'
const test = ref('initial value')
const editor = ref<EditorInstance | null>(null)
setTimeout(() => {
  test.value = '**updated**'
}, 2000)
const clear = () => {
  if (editor.value) {
    console.log(editor.value.getMDEInstance())
    editor.value.clear()
  }
}
const onBlur = () => {
  console.log('editor blur event triggered')
}
</script>

<template>
  <h1>Vue3 component wrapper for EasyMDE</h1>
  <button @click="clear">Clear Value</button>
  <button @click="test = '## new value'">Set Value</button>
  <Editor v-model="test" ref="editor" @blur="onBlur"/>
  <p>current value: {{test}}</p>
</template>

<style>

</style>
