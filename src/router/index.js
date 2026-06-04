import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
    {
      path: '/academic',
      name: 'academic',
      component: () => import('@/views/AcademicView.vue'),
    },
    {
      path: '/admissions',
      name: 'admissions',
      component: () => import('@/views/AdmissionsView.vue'),
    },
  ],
  // Handle scrolling when navigating to anchors (hashes).
  // Provides smooth scrolling and accounts for a fixed header offset.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return new Promise((resolve) => {
        // Small timeout to ensure the target element is rendered
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            const headerOffset = 100 // adjust if your header height differs
            const elementPosition = el.getBoundingClientRect().top + window.scrollY
            const top = Math.max(elementPosition - headerOffset, 0)
            window.scrollTo({ top, left: 0, behavior: 'smooth' })
            resolve({ left: 0, top })
          } else {
            resolve({ left: 0, top: 0 })
          }
        }, 50)
      })
    }

    return { left: 0, top: 0 }
  },
})

export default router
