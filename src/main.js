import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Loading } from 'vant';
import { Icon } from 'vant';
import 'remixicon/fonts/remixicon.css'
import 'vant/lib/index.css';


import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(Loading)
app.use(Icon)
app.mount('#app')