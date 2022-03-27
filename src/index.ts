import { App } from 'vue'

import VueEasyMDE from './components/VueEasyMDE.vue'
export { EditorProps, EditorEvents, EditorInstance } from './types'
const install = (app: App) => {
  app.component('VueEasymde', VueEasyMDE)
}

export {
  VueEasyMDE
}
export default {
  install
}