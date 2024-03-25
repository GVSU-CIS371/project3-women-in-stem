import { createApp } from 'vue'
import './styles/mug.scss'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
createApp(App).mount('#app')

