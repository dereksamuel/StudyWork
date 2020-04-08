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
import Post from "../helpers/database";
import Menu from "@/components/Menu";
import { fb } from "../helpers/firebase";

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
            if(user) {
                post
                    .crearPost(
                        user.uid,
                        user.displayName,
                        456
                    )
            }
        }
    }
}
</script>