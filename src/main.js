import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

window.axios = require('axios')

import Vue3SimpleHtml2pdf from "vue3-simple-html2pdf";
createApp(App).use(store).use(router).use(Vue3SimpleHtml2pdf).mount('#app')
