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
// import  "@css/fontawesome.css" 
// import  "@css/brands.css" 
// import  "@css/solid.css" 
import Unicon from 'vue-unicons'
import { uniWindowSection,uniBookMedical,uniPlus,uniEdit   } from 'vue-unicons/src/icons'
import VueDragDrop from 'vue-drag-drop';

Vue.use(VueDragDrop);

Unicon.add([uniWindowSection,uniBookMedical ,uniPlus,uniEdit ])

Vue.use(Unicon)
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
