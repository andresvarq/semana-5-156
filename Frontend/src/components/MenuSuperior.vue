<template>
    <v-app-bar
    app
    color="primary"
    dark
    height="42"
    >
        <v-tabs
        app
        fixed-tabs
        dark
        >
            <v-tab
            :to="{name: 'Home'}"
            >
                Home
            </v-tab>
            <v-tab
            :to="{name: 'Servicios'}">
                Servicios
            </v-tab>
            <v-tab>
                Referencias
            </v-tab>
            <v-row
            align="center"
            justify="space-around"
            >
                <v-btn
                color="primary"
                :to="{name: 'Login'}"
                >
                    LogIn
                </v-btn>
            </v-row>
        </v-tabs>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'MenuSuperior',
    }
</script>