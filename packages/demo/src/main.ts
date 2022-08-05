import { createApp } from 'vue';
import App from './App.vue';
import { vueDirective } from '../../core/index';

import '../../core/index.css';

createApp(App).directive('ripple', vueDirective).mount('#app');
