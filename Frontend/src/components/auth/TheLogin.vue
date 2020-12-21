<template>
    
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
                let token = response.data.accessToken;
                let user = response.data.name;
                let email = response.data.email;

                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('email', JSON.stringify(email));
                if(token) {
                    swal("Bueeeeenaaaa", "Esa era", "success");
                    this.$router.push('/home');
                }
            }
            catch {
                swal("Paila", "Esa no era", "error");
            }
        }
    }
}
</script>