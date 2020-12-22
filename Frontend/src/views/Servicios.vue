<template>
    <div>
        <menu-superior></menu-superior>

        <v-main>
        <v-container
        v-for="(i, n) in servicios"
                :key="n"
                cols="4"
        >
            
                
                    <v-card height="400">
                        <v-card-title>{{ i.nombre }}</v-card-title>
                        <v-card-text>
                            <img v-bind:src="i.imagen" alt="" width="160" height="160" style="border-radius: 15%">
                        </v-card-text>
                        <v-card-text>{{ i.descripcion }}</v-card-text>
                    </v-card>
                
            
        </v-container>
    </v-main>

        <the-footer></the-footer>
    </div>
</template>

<script>
import MenuSuperior from "../components/MenuSuperior.vue"
import TheFooter from '../components/TheFooter.vue';
import axios from 'axios';

export default {
    name: 'Servicios',
    components: {
        MenuSuperior,
        TheFooter
    },
    data(){
        return {
            servicios: null
        }
    },
    mounted(){
        axios.get('http://localhost:3000/api/categoria/list')
        .then(response => {
            (this.servicios = response.data)
            console.log(this.servicios);
        }).catch(function (error) {
            console.error(error);
        });
    }
}
</script>