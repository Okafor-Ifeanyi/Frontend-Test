import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ToastPlugin)
})