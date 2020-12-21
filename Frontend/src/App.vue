<template>
  <v-app id="app">
    <router-view :key="$route.path"/>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';
import Administracion from './views/Administracion.vue';
import Login from './views/Login.vue';

export default {
  name: 'App',

  components: {
    Home,
    Administracion,
    Login
  },

  data: () => ({
    //
  }),
};
</script>
