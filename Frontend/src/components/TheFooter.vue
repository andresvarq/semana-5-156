<template>
    <v-footer
    dark
    padless
    >
        <v-card
        class="flex"
        flat
        tile
        color="secondary"
        >
            <v-card-text class="py-2 white--text text-center">
                <strong class="subheading">Recuerda visitarnos en nuestro repositorio haciendo <a href="https://github.com/andresvarq/semana-5-156">click aquí</a></strong>
            </v-card-text>

            <v-card-text class="py-2 white--text text-center">
                <strong>Contacto: 3228509371</strong>
            </v-card-text>

            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>Comudos</strong>
            </v-card-text>
        </v-card>


    </v-footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>