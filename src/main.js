import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlassUI from './index' // Adjust path if needed

// Set dark mode if user prefers it
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

const app = createApp(App)

app.use(router)
app.use(GlassUI) // This registers all your g-* components globally

app.mount('#app')
