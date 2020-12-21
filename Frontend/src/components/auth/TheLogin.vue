<template>
    <div class="container mt-5">
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Su correo</label>
            <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">Todo bien que esto es solo pa nosotros.</small>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Contrajeña</label>
            <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <button @click.prevent="loginUser" type="submit" class="btn btn-primary">Hacéle pués</button>
    </form>
    </div>
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
                    this.$router.push('/administracion');
                }
            }
            catch {
                swal("Paila", "Esa no era", "error");
            }
        }
    }
}
</script>