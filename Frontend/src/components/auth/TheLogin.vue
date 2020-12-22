<template>
    <v-row
    justify="center"
    >
        <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
        >
            <v-card
            ref="form"
            color="primary"
            >
                <v-card-text>
                    <v-text-field
                    ref="email"
                    v-model="login.email"
                    label="email"
                    placeholder="email"
                    required
                    ></v-text-field>
                    <v-text-field
                    ref="password"
                    v-model="login.password"
                    label="password"
                    placeholder="password"
                    required
                    type="password"
                    ></v-text-field>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                    <v-btn
                    color="accent"
                    text
                    @click="loginUser"
                    >
                        Enviar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import swal from 'sweetalert';
export default {
    name: 'TheLogin',
    data() {
        return {
            login: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        async loginUser() {
            try {
                let response = await this.$http.post('/api/usuario/login', this.login)
                console.log(response)
                let token = response.data.tokenReturn;
                let user = response.data.user.nombre;
                let email = response.data.user.email;

                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('email', JSON.stringify(email));
                if(token) {
                    swal("Bueeeeenaaaa", "Esa era", "success");
                    this.$router.push('/categorias');
                }
            }
            catch {
                swal("Paila", "Esa no era", "error");
            }
        }
    }
}
</script>