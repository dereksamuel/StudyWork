<template lang="pug">
    #cursesCards
        b-card(:class="cardCurse.sex.toLowerCase() === 'masculino' ? 'masculino' : 'femenino'")
            .card-body
                h5(class="card-title") {{ cardCurse.name }}
                p.card-text {{ cardCurse.description }}
            .card-footer
                small(class="text-muted")
                    p
                        img(src="../../public/img/reloj-de-arena.png" style="width: 36px;")
                        strong(style="margin-left: 25px; font-size: 20px;") {{ cardCurse.value }}
                    p
                        div Estudiando: 
                            strong(v-if="cardCurse.publication1 != 'No'") {{ cardCurse.publication1 }}
                            strong(v-if="cardCurse.publication2 != 'No'") {{ cardCurse.publication2 }}
                            strong(v-if="cardCurse.publication3 != 'No'") {{ cardCurse.publication3 }}
            slot(name="footer")
</template>

<script>
export default {
    props: {
        cardCurse: { type: Object, required: true }
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
.card {
    position: relative;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    width: 277px;
}

.masculino {
    background: #e4fdfc;
}

.femenino {
    background: #fde4fd;
}
</style>