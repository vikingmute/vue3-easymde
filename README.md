# Vue3 EasyMDE Markdown Editor
Vue3 component wrapper for [EasyMDE](https://github.com/Ionaru/easy-markdown-editor). Written in Typescript. Build by Rollup. 

## Install
```bash
# easymde is a peer dependency, we should install it manually
npm install vue3-easymde easymde --save
```

## Usage

```typescript
// main.ts
import VueEasymde from 'vue3-easymde'
import "easymde/dist/easymde.min.css"

app.use(VueEasymde)
```

```vue
<html>
  <vue-easymde v-model="test" ref="editorInstance"/>
</html>
<script lang="ts" setup>
import { ref } from 'vue'
import { EditorInstance } from 'vue3-easymde'  
const test = ref('initial value')

// meanwhile, vue3-easymde also expose particular instance 
const editorInstance = ref<EditorInstance | null>(null)
// you can call getMDEInstance method to get easymde instance
if (editorInstance.value) {
  console.log(editorInstance.value.getMDEInstance())
}
</script>
```

## Demo
### Online Demo
**[Click for the Demo](https://vikingmute.github.io/vue3-easymde/)**
### Run Demo locally
```bash
git clone https://github.com/vikingmute/vue3-easymde.git
cd vue3-easymde
npm install
npm run dev
# open browser at localhost:3000
```
## Props

```typescript
import { Options } from 'easymde'
interface EditorProps {
  modelValue?: string;
  // check all the [config](https://github.com/Ionaru/easy-markdown-editor) here
  options?: Options;
}
```

## Events
```typescript
interface EditorEvents {
  (type: 'update:modelValue', value: string): void;
  (type: 'change', value: string): void;
  (type: 'blur'): void;
}
```

## Methods
```typescript
interface EditorMethods {
  // clear the editor value
  clear: () => void;
  // get easymde instance
  getMDEInstance: () => EasyMDE | null;
}
```
