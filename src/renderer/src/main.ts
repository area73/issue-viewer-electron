import './assets/main.css'
import '../../../node_modules/flowbite-vue/dist/index.css'
// Light theme
import 'markdown-it-code-block/styles/light-theme.css'
import 'markdown-it-code-block/styles/light-theme-token.css'
// // Dark theme
// import 'markdown-it-code-block/styles/dark-theme.css'
// import 'markdown-it-code-block/styles/dark-theme-token.css'
// // Dark theme (for system preference)
// import 'markdown-it-code-block/styles/dark-theme-media.css'
// import 'markdown-it-code-block/styles/dark-theme-token-media.css'
// Base style
import 'markdown-it-code-block/styles/base.css'
import 'markdown-it-code-block/styles/base-token.css'

import { createApp } from 'vue'

import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
