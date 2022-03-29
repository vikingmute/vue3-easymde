<template>
  <div class="vue-easymde-editor">
    <textarea ref="textArea">
    </textarea>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref, defineProps, defineEmits, defineExpose, watch } from 'vue'
import EasyMDE, { Options } from 'easymde'
import type { EditorProps, EditorEvents } from '../types'
const textArea = ref<null | HTMLTextAreaElement>()
let easyMDEInstance : InstanceType<typeof EasyMDE> | null = null
const props = defineProps<EditorProps>()
const emit = defineEmits<EditorEvents>()
const innerValue = ref(props.modelValue || '')
onMounted(() => {
  if (textArea.value) {
    const config: Options = { 
      ...(props.options || {}), 
      element: textArea.value, 
      initialValue: props.modelValue || ''  
    }
    easyMDEInstance = new EasyMDE(config)
    easyMDEInstance.codemirror.on('change', () => {
      if (easyMDEInstance) {
        const updatedValue = easyMDEInstance.value()
        innerValue.value = updatedValue
        emit('update:modelValue', updatedValue)
        emit('change', updatedValue)
      }
    })
    easyMDEInstance.codemirror.on('blur', () => {
      if (easyMDEInstance) { 
        emit('blur')
      }
    })
  }
})
// watch for async change to modelValue
watch(() => props.modelValue, (newValue) => {
  if (easyMDEInstance) {
    if (newValue !== innerValue.value) {
      easyMDEInstance.value(newValue || '')
    }
  }
})
const clear = () => {
  if (easyMDEInstance) {
    easyMDEInstance.value('')
  }
}
const getMDEInstance = () => {
  return easyMDEInstance
}
defineExpose({
  clear,
  getMDEInstance
})

onUnmounted(() => {
  if (easyMDEInstance) {
    easyMDEInstance.cleanup()
  }
  easyMDEInstance = null
})
</script>
