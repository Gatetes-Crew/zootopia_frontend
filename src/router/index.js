import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue';
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '../assets/store/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   /*  {
       path: '/',
      name: 'home',
      component: HomeView
    }, */
   
    {
      path: '/dashboard',
      name: 'dashboard',
     component: DashboardView
    }
      path: '/',
      name: 'login', 
      component: LoginView
    },
  ]
})
router.beforeEach( (to,from) =>{
  const store = useAuthStore()
  if (to.meta.requiresAuth && !store.user.isAuthenticated){
    return { name: 'login'}
  }
})

export default router
