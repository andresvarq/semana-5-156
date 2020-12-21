<template>
  <div class="home">
    <menu-superior></menu-superior>
    
    <main-carousel></main-carousel>

    <the-footer></the-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuSuperior from '../components/MenuSuperior.vue'
import MainCarousel from '../components/MainCarousel.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'Home',
  components: {
    MenuSuperior,
    MainCarousel,
    TheFooter
  }
}
</script>