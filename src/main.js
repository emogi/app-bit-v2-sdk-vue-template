import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Messages from './plugins/Messages'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(router)
app.use(Messages)

// global configs
// import axios from 'axios'
// app.config.globalProperties.axios = axios

// mount apps
app.mount('#app')