<template lang="pug">
    #curses
        Menu
        h1 This is a progress
        p Hola {{ Card.name }}
        p {{ YouNow }}
        b-button(@click="Hello") Watch in console
        b-button(@click="HtoC") Change
        area-chart(
            :colors="['green']"
            :min="1"
            :max="100"
            :data="parseFloat(Card.value)")
</template>

<script>
import Menu from "../components/Menu";
import { fb } from "@/helpers/firebase";

const firebaseMyUser = fb.firestore().collection("usuarios");
const firebaseCollection = "cursos";

export default {
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

    methods: {
        Hello() {
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
            // TODO: push to status with base in the push of curses in USERS
        },

        HtoC() {
            this.history = this.Card
        }
    }
}
</script>