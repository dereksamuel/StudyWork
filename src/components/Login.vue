<template>
  <div>
      <h1><p style="text-align: center;"><strong style="color: #dc3545;">S</strong>tudent</p><p style="font-size: 50px; margin-top: -3vh; text-align: center;"><strong style="color: #dc3545;">W</strong>ork</p></h1>
      <b-card-header class="text-center">
        <h2 style="text-align: left; font-size: 30px; font-family: 'Baloo 2', cursive">INICIAR SESIÓN</h2>
        <b-card style="background-color: #656c78;" class="text-left">
          <b-form-input style="height: 31px; font-size: 15px;" placeholder='Nombre de usuario' v-model="user" :class="!pass && !user ? 'tomato' : 'white'"></b-form-input>
          <br>
          <b-form-input style="height: 31px; font-size: 15px;" placeholder='Contraseña' type='password' v-model="pass" :class="!pass && !user ? 'tomato' : 'white'"></b-form-input>
          <br>
          <b-card-text class="createModal" align='center' style="color: rgb(13, 220, 106);  font-weight: initial;" @click="$bvModal.show('modal-scoped')" variant="primary">Crear cuenta</b-card-text>
          <b-card-text align='center' class="createModal"><div style="color: rgb(13, 220, 106); font-weight: initial;" v-b-modal.modal-prevent-closing>¿olvidó su contraseña?</div></b-card-text>
          <b-button variant='danger' style="width: 100%;" @click="Validar()"><a href="javascript:void(0)" class="ul_countainer_button--ingresar" style="text-decoration: none; color: white;">INGRESAR</a>
          </b-button>
        </b-card>
      </b-card-header>
    <div class="alert alert-danger alert-dismissible fade show" role="alert" style="float:center; margin-top: -580px;" v-show="Notify">
      <strong>Error:</strong> No ingresó nombre de usuario ni contraseña en el campo debido
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
    <div class="alert alert-success alert-dismissible fade show" role="alert" style="float:center; margin-top: -580px;" v-show="isNotifySend">
      <strong>OK:</strong> Lo invitamos a observar en su correo electrónico un mensaje para reestablecer su contraseña
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
  <b-modal id="modal-scoped" header-bg-variant="secondary" footer-bg-variant="secondary">
    <template v-slot:modal-header>
      <!-- Emulate built in modal header close button action -->
      <h5 style="color: white;">Crea tu cuenta</h5>
    </template>
    <template v-slot:default>
        <p>Nombre de usuario</p>
        <b-input-group size="lg">
          <b-form-input style="height: 31px; font-size: 15px;" type="email" v-model='userNameCreate'></b-form-input>
        </b-input-group>
        <br>
      <p>Correo Electrónico *</p>
        <b-input-group size="lg" prepend="@">
          <b-form-input style="height: 31px; font-size: 15px;" type="email" v-model='userCreate'></b-form-input>
        </b-input-group>
        <b v-show="advertirUser" style="color: #dc3545; font-weight: initial; padding: 10px;">No ingresó un email valido</b>
        <br>
      <p>Contraseña *</p>
        <b-input-group size="lg" prepend="***">
          <b-form-input style="height: 31px; font-size: 15px;" type="password" v-model="passCreateFirst"></b-form-input>
          <br>
        </b-input-group>
        <b v-show="minCharacter" style="color: #dc3545; font-weight: initial;  padding: 10px;">Debe ingresar una contraseña mínimo de 6 carácteres</b>
        <br>
      <p>Confirmar contraseña *</p>
        <b-input-group size="lg" prepend="***">
          <b-form-input style="height: 31px; font-size: 15px;" type="password" v-model="passCreateSecond"></b-form-input>
        </b-input-group>
          <b v-show="advertir" style="color: #dc3545; font-weight: initial;  padding: 10px;">Las contraseñas no coinciden</b>
      <p class="alert alert-success alert-dismissible fade show" role="alert" style="float:center; margin-top: 4px;" v-show="isNice">Ingresó sus datos correctamente, ya puede iniciar sesión</p>
    </template>

    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button
      size="sm"
      variant="outline-success"
      @click="Verificar()">
        OK
      </b-button>
      <b-button size="sm"  variant="outline-danger" @click="cancel()">
        Cerrar
      </b-button>
    </template>
  </b-modal>

  <div class="mt-3">
    </div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Recupera tu contraseña"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Escribe tu email"
          label-for="name-input"
          invalid-feedback="el email es necesario"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
          <b v-show="advertirUsered" style="color: #dc3545; font-weight: initial; padding: 10px;">No ingresó un email valido</b>
        </b-form-group>
      </form>
      <template v-slot:modal-footer="{ ok, cancel }">
      <b-button
      size="sm"
      variant="outline-success"
      @show="resetModal"
      @hidden="resetModal"
      @click="handleOk">
        OK
      </b-button>
      <b-button size="sm"  variant="outline-danger" @click="cancel()">
        Cerrar
      </b-button>
    </template>
    </b-modal>
  </div>
</template>

<script>
//storage subir fotos.
import { fb } from "../helpers/firebase";

export default {
  name: 'Login',
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
      userNameCreate: '',
      Notify: false,
      NotifyUser: false,
      NotifyPass: false,
      advertir: false,
      advertirUser: false,
      good: false,
      minCharacter: false,
      isNice: false,
      name: '',
      nameState: null,
      submittedNames: [],
      advertirUsered: false,
      isNotifySend: false
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
      return fb.auth().signInWithEmailAndPassword(this.user, this.pass)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Nombre de usuario o contraseña incorrecta ' + errorCode + errorMessage)
        this.firebase = `Este es un error: ${errorMessage}`
      });
    },
    Verificar() {
      fb.auth().createUserWithEmailAndPassword(this.userCreate, this.passCreateFirst)
      .then(res => {
        res.user.updateProfile({
          displayName: this.userNameCreate
        })

        fb.auth().signOut()

        this.isNice = true
      })
      .catch(error => {
          var errorMessage = error.message;
          console.log(errorMessage);
          })
      if(this.passCreateFirst.length < 6) {
          this.minCharacter = true
      } else {
          this.minCharacter = false
      }
      if(this.passCreateFirst != this.passCreateSecond) {
        return this.advertir = true;
      } else {
        this.advertir = false;
      }

      let regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g;
      if(regex.test(this.userCreate)) {
        return this.advertirUser = false
      } else {
        this.advertirUser = true
      }
    },

    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt, email) {
        bvModalEvt.preventDefault()
          let regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g;
          if(regex.test(this.name)) {
              this.handleSubmit()
              fb.auth().sendPasswordResetEmail(this.name)
              .then(res => {
                console.log('se ha enviado un correo para que reestablesca su contraseña' + email + res);
                this.isNotifySend = true
              })
              .catch(res => {
                console.log('Error' + res);
              })
              this.advertirUsered = false
            } else {
              this.advertirUsered = true
            }
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        this.submittedNames.push(this.name)
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
  }
}
</script>

<style scoped>


.text-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  width: 300px;
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

h2 {
  font-family: 'Baloo 2', cursive;
  font-weight: bolder;
  margin-left: 19px;
}
h1 {
  font-family: 'Courgette', cursive;
  font-size: 68px;
  margin-top: 7vh;
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

.createModal:hover {
  cursor: pointer;
}
</style>
