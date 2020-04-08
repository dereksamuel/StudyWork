<template lang="pug">
    #MyApp
        b-navbar(toggleable="sm" type="light" variant="dark")
            b-navbar-toggle(target="nav-text-collapse")
            b-navbar-brand(style=" cursor: pointer;"  @click="Home")
                img(src="../../public/img/botanico.png" alt="" class="icon")
                strong(style="color: white;") Student Work
            b-collapse(id="nav-text-collapse" is-nav)
                b-navbar-nav
                    b-nav-text(@click="cursos") Cursos
                    b-nav-text(@click="status") Estados
                    b-nav-text(@click="progress") Progresos
                    b-nav-text(@click="works") Tareas
                b-navbar-nav(class="ml-auto")
                    b-nav-item-dropdown(right)
                        template(v-slot:button-content)
                            b-avatar(variant="light" style="margin-right: 7px;")
                        b-dropdown-item(@click="perfil") {{ nameUser }}
                        b-dropdown-item(@click="logout") Cerrar sesión
</template>

<script>
import { fb } from "../helpers/firebase";

export default {
    name: 'home',

    data() {
        return {
            Menu: false,
            Oruga: true,
            Mariposa: false,
            showDismissibleAlert: '',
            showDismissibleAlertnice: '',
            showDismissibleAlertWarning: ''
        }
    },

    computed: {
        nameUser() {
            var user = fb.auth().currentUser;
            let nameUsered = user.displayName;
                return nameUsered;
        }
    },

    methods: {
        perfil() { this.$router.push({ name: "perfil" }); },
        works() { this.$router.push({ name: "work" }); },
        status() { this.$router.push({ name: "estados" }); },
        cursos() { this.$router.push({ name: "cursos" });},
        progress() { this.$router.push({ name: "progreso" });},
        Home() { this.$router.push({ name: "home" }); },
        logout() { return fb.auth().signOut(); },
        userLogin() {
            var user = fb.auth().currentUser;
            var name, email, photoUrl, uid, emailVerified;

            if (user != null) {
                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid;
                console.log(`Soy ${name || email} mi cuenta es ${email}, mi photoUrl es ${photoUrl}
                mi verificación de email es: ${emailVerified} y mi uid es ${uid}. :)`);
                this.userName = email;
            }
        },
        showMenu() { this.Menu = !this.Menu;  this.Oruga = !this.Oruga; this.Mariposa = !this.Mariposa}
    }
}

/*
<div>
    <div class="card">
        <b-card-text class="card--text">
        <strong @click="Home" style=" cursor: pointer;"><img src="../../public/img/botanico.png" alt="" class="icon"> <strong class="str">S</strong>tudent <strong class="str">W</strong>ork</strong>
        <div class="perfil">
            <div class="perfil--guide" @click="showMenu">
                <img
                    v-show="Mariposa"
                    src="../../public/img/mariposa.png"
                    alt="Mariposa menú"
                    id="logo2"
                    style="width: 42px; float: right;"
                />
                <img
                    v-show="Oruga"
                    src="../../public/img/icons8-oruga-80.png"
                    alt="Oruga menú"
                    id="logo2"
                    style="width: 42px; float: right;"
                />
            </div>
            <ul class="menu--ul" v-show="Menu">
            <li align="center" style="background-color: rgb(34, 83, 132); color: white;">{{ perfilUser }}</li>
            <ul style="background-color: rgba(226, 225, 225, 0.92);">
                <li @click="status" style=" cursor: pointer;">Estados <img src="../../public/img/icons8-estado-desconocido-96.png" alt="" style="width: 20px;"></li>
                <li style=" cursor: pointer;">Tareas <img src="../../public/img/icons8-test-aprobado-96.png" alt="" style="width: 20px;"></li>
                <li style=" cursor: pointer;">Progreso <img src="../../public/img/icons8-en-progreso-96.png" alt="" style="width: 20px;"></li>
                <li style=" cursor: pointer;">Cursos <img src="../../public/img/icons8-conferencia-96.png" alt="" style="width: 20px;"></li>
            </ul>
            <li @click="logout" align="center" style="background-color: rgb(34, 83, 132); color: white; cursor: pointer;">Cerrar Sesión</li>
            </ul>
        </div>
        </b-card-text>
    </div>
    </div>
*/
</script>

<style scoped>
.card {
    margin: 0;
    background-image: linear-gradient(120deg, #2c3e50 0%, #20558a 100%);
    padding: 17px;
}

.card--text {
    font-size: 27px;
    color: aliceblue;
    text-align: left;
    display: flex;
    justify-content: space-between;
}

.icon {
    vertical-align: middle;
    border-style: none;
    width: 27px;
    margin-top: -9px;
}

.str {
    color: #e44c3c;
}

.menu--ul {
    list-style: none;
    padding: 0px;
    position: absolute;
    width: 222px;
    text-align: left;
    margin: 0px 0px 0px;
    margin-left: -162px;
    margin-top: 58px;
    color: #42566b;
    font-size: 17px;
    border: 2px solid #205488;
}

.perfil--guide {
    cursor: pointer;
}

.navbar-light .navbar-text {
    color: rgb(194, 194, 194);
    padding: 12px;
    cursor: pointer;
}
</style>
