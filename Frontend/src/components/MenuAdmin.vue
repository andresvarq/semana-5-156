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
            <v-tab
            :to="{name: 'Categorias'}"
            >
                Categorias
            </v-tab>
            <v-tab
            :to="{name: 'Articulos'}"
            >
                Articulos
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
                @click="logOut"
                >
                    Logout
                </v-btn>
            </v-row>
        </v-tabs>
    </v-app-bar>
</template>

<script>
export default {
    data(){
        return{
            users: {}
        }
    },
    methods: {
        getUserDetails() {
            let user = localStorage.getItem('user');
            let token = localStorage.getItem('token');
            let email = localStorage.getItem('email');
            console.log(JSON.parse(users));

            if(token) {
                this.users = JSON.parse(user);
                this.users = JSON.parse(email);
                console.log(users);
            }
        },
        logOut() {
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            localStorage.removeItem('email');
            this.$router.push('/')
        }
    },
    created() {
        this.getUserDetails()
    }
}
</script>