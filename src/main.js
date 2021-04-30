import { createApp } from 'vue'
import VueFinalModal from 'vue-final-modal';
import App from './App.vue'

const app = createApp(App);

app.use(VueFinalModal());

app.mount('#app')
