import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import draggable from 'vuedraggable';
Vue.use(draggable);
import Unicon from 'vue-unicons';
import {
  uniWindowSection,
  uniBookMedical,
  uniPlus,
  uniEdit,
  uniListUl,
  uniFileMedical,
  uniTrashAlt,
  uniMinus,
  uniSortAmountUp,
  uniSortAmountDown,
  uniImagePlus,
  uniPalette,
  uniHome,
  uniTable,
  uniVideo,
  uniMap,
  uniText,
  uniAlignLeftJustify,
  uniClipboardAlt,
  uniEditAlt,
  uniEye,
  uniBold,
  uniImage,
  uniItalic,
  uniAlignCenter, uniAlignRight, uniAlignLeft,uniLinkAlt ,uniEnvelopeAlt ,
  uniLinkedin, uniFacebook, uniSkype, uniTelegram, uniTwitter, uniWhatsapp ,uniLine,uniCommentDots
} from 'vue-unicons/src/icons';
import VueDragDrop from 'vue-drag-drop';

Vue.use(VueDragDrop);

Unicon.add([
  uniWindowSection,
  uniBookMedical,
  uniPlus,
  uniEdit,
  uniListUl,
  uniFileMedical,
  uniTrashAlt,
  uniMinus,
  uniSortAmountUp,
  uniSortAmountDown,
  uniImagePlus,
  uniPalette,
  uniHome,
  uniTable,
  uniVideo,
  uniMap,
  uniText,
  uniAlignLeftJustify,
  uniClipboardAlt,
  uniEditAlt,
  uniEye,
  uniBold,
  uniImage,
  uniItalic,
  uniAlignCenter, uniAlignRight, uniAlignLeft,uniLinkAlt ,uniEnvelopeAlt ,
  uniLinkedin, uniFacebook, uniSkype, uniTelegram, uniTwitter, uniWhatsapp,uniLine ,uniCommentDots
]);

Vue.use(Unicon);
Vue.use(ElementUI);

import './styles/global.scss';
Vue.config.productionTip = false;
var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);


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
