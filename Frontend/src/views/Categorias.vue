<template>
    <div class="adm">
        
        <div class="container">
            <menu-admin></menu-admin>
        </div>
        <div class="container mt-10">
            <administracion-categorias></administracion-categorias>
        </div>
        <v-spacer></v-spacer>
        <div class="mb-0 mt-15">
            <the-footer></the-footer>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import AdministracionCategorias from '../components/AdministracionCategorias.vue'
import TheFooter from '../components/TheFooter.vue'
import MenuAdmin from '../components/MenuAdmin.vue'

export default {
    name: 'Categorias',
    components: {
        MenuAdmin,
        AdministracionCategorias,
        TheFooter
    }
}
</script>