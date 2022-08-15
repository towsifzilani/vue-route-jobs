import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobsDetails from '../views/jobs/jobsDetails.vue'
import ContactUs from '../views/ContactUs.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: JobsDetails,
    props: true
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactUs,
    props: true
  },
  // redirect
  {
    path: '/contacts-us',
    redirect: '/contacts',
  },
  // 404 not found
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    components: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
