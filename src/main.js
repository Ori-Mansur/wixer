import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faUserSecret);
import './styles/global.scss';
Vue.config.productionTip = false;

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB9BGllveeQJbhJytk2MdjCkMAvadMc8n8',
    libraries: 'places'
  }
});
import VueDraggable from 'vue-draggable';

Vue.use(VueDraggable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
