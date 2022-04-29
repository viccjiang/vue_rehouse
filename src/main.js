import { createApp } from 'vue';
import 'bootstrap';
import AOS from 'aos';
import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';
import 'aos/dist/aos.css';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
  date,
};

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

setLocale('zh_TW');

app.config.globalProperties.$httpMessageState = $httpMessageState;

const options = {
  confirmButtonColor: '#236F6B',
  cancelButtonColor: '#EE847D',
};
app.use({
  install: () => {
    AOS.init({
      disable: false,
      startEvent: 'load',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease-in-out-quad',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  },
});
app.use(VueAxios, axios);
app.use(VueSweetalert2, options);
app.use(router);
app.component('Loading', VueLoading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
