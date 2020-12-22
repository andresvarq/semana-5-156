<template>
    <v-card>
        <v-card-title>{{ user.nombre }}</v-card-title>
        <v-card-title>
            <img v-bind:src='user.imagen' alt="Foto miembro del equipo" width="190em" height="190em" style="border-radius: 15%">
        </v-card-title>
        <v-card-text>{{ user.referencia }}</v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'ReferencesUsers',
    props: ['user']
}
</script>