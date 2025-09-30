import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App);

import texto from './directives/texto.js';
import posicao from './directives/posicao.js';
import informacao from './directives/informacao.js';

Vue.directive('texto', texto);

Vue.directive('posicao', posicao);

Vue.directive('informacao', informacao);

Vue.mount('#app');
