<template lang="pug">
    #cursesCards
        b-card(:class="cardCurse.sex.toLowerCase() === 'masculino' ? 'masculino' : 'femenino'")
            .card-body
                h5(class="card-title" @click="personal(cardCurse)") {{ cardCurse.name }}
                p.card-text {{ cardCurse.description }}
            .card-footer
                small(class="text-muted")
                    p
                        img(src="https://firebasestorage.googleapis.com/v0/b/myworkspace-b1621.appspot.com/o/images%2Freloj-de-arena.png?alt=media&token=ab6e2d00-1153-4d1e-ae09-36abf070e0b3" style="width: 36px;")
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
    },

    methods: {
        personal({ id }) {
            this.$router.push({ name: 'workPersonal', params: { id } });
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