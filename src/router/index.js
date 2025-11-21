import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import MenuPage from '../pages/MenuPage.vue'
import PaketPage from '../pages/PaketPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import MenuDetailPage from '../pages/MenuDetailPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/menu', name: 'menu', component: MenuPage },
  { path: '/paket', name: 'paket', component: PaketPage },
  { path: '/contact', name: 'contact', component: ContactPage },
  {
    path: '/menu/:id',
    name: 'menu-detail',
    component: MenuDetailPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
