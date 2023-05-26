import { createApp } from 'vue'
import { Loading } from 'vant';
import 'vant/lib/index.css';
import { inject } from '@vercel/analytics';
import App from './App.vue'
const app = createApp(App)
app.use(Loading)
app.use(inject)
app.mount('#app')
