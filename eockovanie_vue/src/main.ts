import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core'
import {faEye, faEyeSlash, faQuestionCircle, faUserSecret} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faEye)
library.add(faEyeSlash)
library.add(faQuestionCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);
Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);*/


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
