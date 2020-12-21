<template>
    <div class="adm">
        <div class="container">
            
        </div>
        <div class="container">
            <administracion-contenidos></administracion-contenidos>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
// @ is an alias to /src
import MenuSuperior from '../components/MenuSuperior.vue'
import AdministracionContenidos from '../components/AdministracionContenidos.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
    name: 'Adm',
    components: {
        MenuSuperior,
        AdministracionContenidos,
        TheFooter
    }
}
</script>