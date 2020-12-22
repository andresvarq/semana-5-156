<template>
  <v-app id="app">
    <router-view :key="$route.path"/>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';
import Categorias from './views/Categorias.vue';
import Login from './views/Login.vue';
import Articulos from './views/Articulos.vue'
import Servicios from './views/Servicios.vue'

export default {
  name: 'App',

  components: {
    Home,
    Categorias,
    Login,
    Articulos,
    Servicios
  },
};
</script>
