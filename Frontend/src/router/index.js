import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/categorias',
    name: 'Categorias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "categorias" */ '../views/Categorias.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/articulos',
    name: 'Articulos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "articulos" */ '../views/Articulos.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(localStorage.getItem('jwt') === null) {
      next({
        path: '/categorias'
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
