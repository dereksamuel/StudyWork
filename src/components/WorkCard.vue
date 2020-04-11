<template lang="pug">
    .countainer
        b-card-text(style="margin-left: 10px; margin-top: 5px; font-size: 18px;") {{ Worker.name }}
        slot(name="footer")
</template>

<script>
export default {
    name: "CardWork",
    props: {
        Worker: { type: Object, required: true }
    },

    data() {
        return {
            z: '../../public/img/empresario.png',
            x: '../../public/img/mujer-de-negocios.png'
        }
    }
}
</script>

<style scoped>
    .countainer {
        background: #fff;
        box-shadow: 2px 2px 10px;
    }
</style>