import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

export default defineNuxtPlugin(() => {
    const app = createApp({});
    app.use(ToastPlugin);
    app.mount('#app');
})
