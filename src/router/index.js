import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Templates from '../views/TemplatesPage.vue'
import TemplatePreviewPage from '../views/TemplatePreviewPage.vue'
import UserDetails from '../views/UserDetails.vue'
import WebsiteEditor from '../views/WebsiteEditor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/Template',
    name: 'Template',
    component: Templates
  },
  {
    path: '/Template/:id',
    name: 'TemplatePreview',
    component: TemplatePreviewPage
  },
  {
    path: '/User/:id',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/editor',
    name: 'WebsiteEditor',
    component: WebsiteEditor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
