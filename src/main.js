import { createApp } from 'vue'
import { Loading } from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'

createApp(App).use(Loading).mount('#app')