<template>
  <v-app>
    <v-main>
      <router-view :key="$route.path"/>
    </v-main>
  </v-app>
</template>

<script>
import MenuSuperior from './components/MenuSuperior';

export default {
  name: 'App',

  components: {
    MenuSuperior
  },

  data: () => ({
    //
  }),
};
</script>
