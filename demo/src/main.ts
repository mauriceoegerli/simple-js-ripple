import { createApp } from 'vue';
import App from './App.vue';
import { vueDirective } from '../../src';

import '../../src/index.css';

createApp(App).directive('ripple', vueDirective).mount('#app');
