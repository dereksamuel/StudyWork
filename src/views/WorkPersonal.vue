<template lang="pug">
    #curses
        Menu
        h1(align="center") {{ Card.name }}
</template>

<script>
import Menu from "../components/Menu";
import { fb } from "@/helpers/firebase";

const firebaseMyUser = fb.firestore().collection("usuarios");
const firebaseCollection = "cursos";

export default {
    name: 'WorkPersonal',
    components: { Menu },

    data() {
        return {
            Card: [],
            history: []
        }
    },

    computed: {
        YouNow() {
            return `This is my collection of firebase: ${firebaseMyUser}`
        }
    },

    created() {
            firebaseMyUser
            .doc(`dc_${fb.auth().currentUser.uid}`)
            .collection(firebaseCollection)
            .onSnapshot(querySnapshot => {
                let list = [];
                querySnapshot.forEach(function(doc) {
                    list = {id: doc.id, ...doc.data()};
                });
            this.Card = list;
            })
            this.$bus.$on("name", track => {
                this.Card = track;
            });
            // TODO: push to status with base in the push of curses in USERS
        },
}
</script>