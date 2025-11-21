import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ServiceDetailPage from '../pages/ServiceDetailPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/services', name: 'services', component: ServicesPage },
  {
    path: '/services/:id',
    name: 'service-detail',
    component: ServiceDetailPage,
    props: true
  },
  { path: '/contact', name: 'contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
