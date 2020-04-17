<template lang="pug">
    #curses
        Menu
        h1(align="center") {{ Card }}
</template>

<script>
import Menu from "../components/Menu";

export default {
    name: 'WorkPersonal',
    components: { Menu },

    data() {
        return {
            Card: [],
            history: {}
        }
    },

    created() {
            this.$bus.$on("name", track => {
                this.Card = track;
                console.log(this.Card.name);
                //no borres el this.$bus porque funciona, y hace todo lo que quieres a excepción de vivir más, solo vive dentro de su scope
                return this.Card
            });
        },
    methods: {
        name() {
            console.log('Accediste a escuchar')
        }
    }
}
</script>