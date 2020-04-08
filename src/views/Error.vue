<template>
    <div>
        <h1 class="title" align="center">No pudimos encontrar su página</h1>
        <div class="countainer">
            <h2 align="center" class="error">ERROR 404</h2>
            <hr>
            <br>
            <p class="parr">No pudimos encontrar su página</p>
            <p class="parr">debido a un error en la URL</p>
            <p class="parr">o a un error de internet</p>
            <b-button @click="HomeLogout" variant="danger">Cerrar Sesión</b-button>
            <b-button @click="Home" variant="danger">Regresar a la página de inicio</b-button>
        </div>
    </div>
</template>

<style scoped>
    .countainer {
        display: block;
        margin-left: auto;
        background-color: rgb(189, 189, 189);
        margin-right: auto;
        width: 233px;
        margin-top: 10vh;
        padding: 16px;
    }

    .error {
        color: #dc3545;
    }

    .parr {
        margin-top: -3vh;
    }

    .title {
        margin-top: 4vh;
        color: #dc3545;
    }
</style>

<script>
import { fb } from "../helpers/firebase";

export default {
    name:'Error',
    methods: {
        Home() {this.$router.push({ name: 'home' });},
        HomeLogout() { return fb.auth().signOut(); }
    }
}
</script>

