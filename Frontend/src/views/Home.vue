<template>
  <div class="home">
    <div>
      <menu-superior></menu-superior>
    </div>
    

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <div>
      <main-carousel></main-carousel>
    </div>
    
    <div>
      <quienes-somos></quienes-somos>
    </div>
    
    <div>
      <v-container>
        <services-list></services-list>
      </v-container>
    </div>
    
    
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="(item, index) of users" :key="index">
            <references-users v-bind:user="item"></references-users>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    
    <div>
      <the-footer></the-footer>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MenuSuperior from '../components/MenuSuperior.vue'
import MainCarousel from '../components/MainCarousel.vue'
import TheFooter from '../components/TheFooter.vue'
import ServicesList from '../components/ServicesList.vue'
import QuienesSomos from '../components/QuienesSomos.vue'
import ReferencesUsers from '../components/ReferencesUsers.vue'

export default {
  name: 'Home',
  components: {
    MenuSuperior,
    MainCarousel,
    TheFooter,
    ServicesList,
    QuienesSomos,
    ReferencesUsers
  },
  data () {
    return {
    users: [
      {
        nombre: 'Capsule corp',
        imagen: 'https://as1.ftcdn.net/jpg/02/47/02/72/500_F_247027209_dLcoCXywIVmv0GqgIOTfy2jTBdBiQ16u.jpg',
        referencia: 'Increible, teniamos muchos problemas de comunicación a lo largo de toda nuestra operación, sin embargo; gracias a sus alertas y al chat-bot ahora somos una empresa totalmente conectada.'
      },
      {
        nombre: 'Pizza Express',
        imagen: 'https://image.freepik.com/vector-gratis/flying-slice-of-pizza-cartoon-vector-illustration-concepto-comida-rapida-vector-aislado-estilo-dibujos-animados-plana_138676-1934.jpg',
        referencia: 'Siempre fue un dolor de cabeza el definir que sede atenderia cada pedido de domicilio, desde que conseguimos el diagrama organizacional es muy sencillo ya que al momento que una sede toma un pedido automaticamente queda deshabilitado para las otras.'
      },
      {
        nombre: 'Concentra',
        imagen: 'https://image.freepik.com/vector-gratis/conjunto-iconos-esquema-call-center_98292-769.jpg',
        referencia: 'Nunca pensamos que el home office pudiera ser tan facil, al estar conectados todo el tiempo por medio del chatroom la productividad ha aumentado en un 1000%, toda novedad se reporta inmediatamente y se pueden tomar acciones bastante rapido.'
      }
    ]
  }},
}
</script>