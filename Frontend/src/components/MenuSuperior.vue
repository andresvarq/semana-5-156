<template>
    <v-app-bar
    app
    color="primary"
    dark
    >
        <v-tabs
        app
        fixed-tabs
        dark
        >
            <v-tab>
                Home
            </v-tab>
            <v-tab>
                Servicios
            </v-tab>
            <v-tab>
                Referencias
            </v-tab>
            <v-row
            align="center"
            justify="space-around"
            >
                <v-btn color="primary">LogIn</v-btn>
            </v-row>
        </v-tabs>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'MenuSuperior',
        data: () => ({
            drawer: null,
            admins: [
                {}
            ]
        })

    
    }
</script>