<template lang="pug">
#AppMyStatus
    Menu
    h2 Her is a Status
    b-button(@click="perfilUser") Consola Firebase
    b-button(@click="dataBases") console
    b-input(v-model='named')
</div>
</template>

<script>
import Menu from "@/components/Menu";
import { fb } from "../helpers/firebase";

class Post {
    constructor() {
        this.db = fb.firestore()
    }
    crearPost(autor) {
        return this.db.collection('posts').add({
            autor
        })
        .then(docRef => {
            console.log(`soy: ${docRef.uid}`)
        })
        .catch(error => {
            console.log(`Soy un error: ${error}`)
        })
    }
}

export default {
    name: 'home',
    components: {
        Menu
    },

    data() {
        return {
            information: 'ok',
            named: 'x'
        }
    },

    methods: {
        perfilUser() {
            console.log(fb);
        },

        dataBases() {
            const post = new Post;
            const user = fb.auth().currentUser;
                post
                    .crearPost(
                        user.displayName
                    )
        }
    }
}
</script>