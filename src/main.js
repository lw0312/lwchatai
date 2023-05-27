import { createApp } from 'vue'
import { Loading } from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import { inject } from '@vercel/analytics';
inject();
const app = createApp(App)
app.use(Loading)
app.mount('#app')
