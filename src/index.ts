import { App } from 'vue'

import VueEasyMDE from './components/VueEasyMDE.vue'

const install = (app: App) => {
  app.component('VueEasymde', VueEasyMDE)
}

export {
  VueEasyMDE
}
export default {
  install
}