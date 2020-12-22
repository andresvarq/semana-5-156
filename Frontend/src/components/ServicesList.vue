<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col
                v-for="(i, n) in servicios"
                :key="n"
                cols="4"
                >
                    <v-card height="500">
                        <v-card-title>{{ i.nombre }}</v-card-title>
                        <v-card-text>
                            <img v-bind:src="i.imagen" alt="" width="160" height="160" style="border-radius: 15%">
                        </v-card-text>
                        <v-card-text>{{ i.descripcion }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
    

<script>

import axios from 'axios';

export default {
    name: 'Services',
    data(){
        return {
            servicios: null
        }
    },
    mounted(){
        axios.get('http://localhost:3000/api/categoria/list')
        .then(response => {
            (this.servicios = response.data.slice(0, 3))
            console.log(this.servicios);
        }).catch(function (error) {
            console.error(error);
        });
    }
}
</script>