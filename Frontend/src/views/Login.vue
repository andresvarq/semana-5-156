<template>
    <div>
    
        <v-container>
            <the-login></the-login>
        </v-container>

        <v-container>
            <the-footer></the-footer>
        </v-container>
        
    </div>
</template>

<script>

import TheLogin from '../components/auth/TheLogin.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
    components: {
        TheLogin,
        TheFooter,
    }
}
</script>