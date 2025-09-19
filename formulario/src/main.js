import { createApp } from 'vue';
import App from './App.vue';
import { vMaska } from 'maska/vue';
import moment from 'moment';

// createApp(App).mount('#app')

const app = createApp(App);
app.directive('maska', vMaska); // registra a diretiva
app.config.globalProperties.$moment = moment;
app.config.globalProperties.$moment.locale('pt-br');
app.mount('#app');
