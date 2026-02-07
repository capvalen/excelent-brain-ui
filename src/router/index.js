import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView,
    }, */
		{
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },		
		{
      path: '/panel',
      name: 'panel',
			redirect: 'panel/dashboard',
      component: () => import('../Panel.vue'),
			children:[
				{
					path: '/dashboard',
					name: 'dashboard',
					component: () => import('../views/Citas/Dashboard.vue'),
				},
				{
					path: '/calendario',
					name: 'calendario',
					component: () => import('../views/Citas/Calendario.vue'),
				},
				{
					path: '/pacientes',
					name: 'pacientes',
					component: () => import('../views/Pacientes/PacientesIndex.vue'),
				},
				{
					path: '/paciente/:id',
					name: 'paciente',
					component: () => import('../views/Pacientes/PacientePerfil.vue'),
				},
			]
    },
		
  ],
})

export default router
