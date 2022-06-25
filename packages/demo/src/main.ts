import { createApp } from 'vue';
import App from './App.vue';
import { vueDirective } from 'modern-js-ripple';

import 'modern-js-ripple/index.css';

createApp(App).directive('ripple', vueDirective).mount('#app');
