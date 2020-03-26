<template>
  <div>
      <h1><p><strong style="color: #dc3545;">S</strong>tudent</p><p style="font-size: 50px; margin-top: -3vh;"><strong style="color: #dc3545;">W</strong>ork</p></h1>
      <b-card-header class="text-center">
        <h2 style="text-align: left; font-size: 30px; font-family: 'Baloo 2', cursive">INICIAR SESIÓN</h2>
        <b-card style="background-color: #656c78;" class="text-left">
          <b-form-input style="height: 31px; font-size: 15px;" placeholder='Nombre de usuario' v-model="user" :class="!pass && !user ? 'tomato' : 'white'"></b-form-input>
          <br>
          <b-form-input style="height: 31px; font-size: 15px;" placeholder='Contraseña' type='password' v-model="pass" :class="!pass && !user ? 'tomato' : 'white'"></b-form-input>
          <br>
          <b-card-text align='center' style="color: rgb(13, 220, 106);  font-weight: initial;" @click="$bvModal.show('modal-scoped')" variant="primary">Crear cuenta</b-card-text>
          <b-card-text align='center'><router-link to="/sasa" style="color: rgb(13, 220, 106); font-weight: initial;">¿olvidó su contraseña?</router-link></b-card-text>
          <b-button variant='danger' style="width: 100%;" @click="Validar()"><a href="javascript:Validar()" class="ul_countainer_button--ingresar" style="text-decoration: none; color: white;">INGRESAR</a>
          </b-button>
        </b-card>
      </b-card-header>
    <div class="alert alert-danger alert-dismissible fade show" role="alert" style="float:center; margin-top: -580px;" v-show="Notify">
      <strong>Error:</strong> No ingresó nombre de usuario o contraseña en el campo debido
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-warning alert-dismissible fade show" role="alert" style="float:center; margin-top: -580px;" v-show="NotifyUser">
      <strong>Advertencia:</strong> No ingresó nombre de usuario en el campo debido
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-warning alert-dismissible fade show" role="alert" style="float:center; margin-top: -580px;" v-show="NotifyPass">
      <strong>Advertencia:</strong> No ingresó contraseña en el campo debido
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-info alert-dismissible fade show" role="alert" style="float:center; margin-top: -580px;" v-show="errorToUser">
      <strong>Error:</strong> Nombre de usuario o contraseña equivocados
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
  <b-modal id="modal-scoped">
    <template v-slot:modal-header>
      <!-- Emulate built in modal header close button action -->
      <h5>Crea tu cuenta</h5>
    </template>

    <template v-slot:default>
      <br>
      <p>Nombre de usuario *</p>
        <b-input-group size="lg" prepend="@">
          <b-form-input style="height: 31px; font-size: 15px;" type="email" v-model='userCreate'></b-form-input>
        </b-input-group>
        <br>
      <p>Contraseña *</p>
        <b-input-group size="lg" prepend="***">
          <b-form-input style="height: 31px; font-size: 15px;" type="password" v-model="passCreateFirst"></b-form-input>
        </b-input-group>
        <br>
      <p>Confirmar contraseña *</p>
        <b-input-group size="lg" prepend="***">
          <b-form-input style="height: 31px; font-size: 15px;" type="password" v-model="passCreateSecond"></b-form-input>
        </b-input-group>
        <br>
      <b v-show="advertir">Las contraseñas no coinciden ⚠</b>
      <b v-show="advertirUser">No ingresó un email valido ⚠</b>
    </template>

    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button size="sm"  variant="outline-success" @click="Verificar()">
        OK
      </b-button>
      <b-button size="sm"  variant="outline-danger" @click="cancel()">
        Cancelar
      </b-button>
    </template>
  </b-modal>
  </div>
</template>

<script>
//https://firebase.google.com/docs/auth/web/start para habilitar el crear usuario en un Modal de bootstrap,
//storage subir fotos.
var firebase = require('firebase');
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: '',
      pass: '',
      userCreate: '',
      passCreateFirst: '',
      passCreateSecond: '',
      Notify: false,
      NotifyUser: false,
      NotifyPass: false,
      advertir: false,
      advertirUser: false,
      errorToUser: false
    }
  },

  methods: {
    Validar() {
      if (!this.user && !this.pass) {
        this.Notify = true;
      } else if (!this.user) {
        this.NotifyUser = true;
      } else if (!this.pass) {
        this.NotifyPass = true;
      }
      firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
      .then(function() {
          return location.href = "/home"
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        this.errorToUser = !this.errorToUser;
        console.log('Nombre de usuario o contraseña incorrecta' + errorCode + errorMessage)
      });
    },
    Verificar() {
      if(this.passCreateFirst != this.passCreateSecond) {
        return this.advertir = true;
      } else {
        this.advertir = false;
        firebase.auth().createUserWithEmailAndPassword(this.userCreate, this.passCreateFirst)
        .then(function() {
          return location.href = "/"
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          });
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Baloo+2|Courgette&display=swap');

.text-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  width: 300px;
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
  background-color: #747d8c;
  border: 6px solid rgba(43, 43, 43, 0.2);
}

.Label {
  font-size: 15px;
  color: #2c3e50;
  font-weight: initial;
}

.input-group-prepend {
    margin-right: -1px;
    height: 31px;
    font-size: 10px;
}

body {
background-color: maroon;
}

h2 {
  font-family: 'Baloo 2', cursive;
  font-weight: bolder;
  margin-left: 19px;
}
h1 {
  font-family: 'Courgette', cursive;
      font-size: 68px;
}

img {
    margin-left: -62px;
    margin-top: -12vh;
}

.tomato {
  background-color: #fae0dd;
}

.white {
  background-color: aliceblue;
}
</style>
