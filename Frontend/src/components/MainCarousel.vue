<template>
    <v-carousel class="mt-12">
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        width="100%"
        height="550"
        
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        src: 'https://image.freepik.com/vector-gratis/ilustracion-concepto-redes-sociales_53876-18310.jpg',
                    },
                    {
                        src: 'https://image.freepik.com/foto-gratis/elemento-webscape_1150-1791.jpg',
                    },
                    {
                        src: 'https://as2.ftcdn.net/jpg/02/49/19/29/500_F_249192996_C1UWcMlRRrbQxY8Z2V09IY059trB9GuC.jpg',
                    },
                ],
            }
        },
    }
</script>