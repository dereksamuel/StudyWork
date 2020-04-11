<template lang="pug">
    #curses
        Menu
<<<<<<< HEAD
        #everything
          h1(align="center" style="color: #4C7493; font-weight: bold;") CURSOS
          p(align="center")
            strong {{ total }} estudio
            strong {{ filtro }}
          b-button(@click="showModal" style="margin-left: 11px;" variant="success")
            strong +
          h3
            b-modal(ref="my-modal" hide-footer :title=" updateData ? 'Actualizar el curso' : 'Crear un curso nuevo' " cancelVariant="danger")
                div(class="d-block text-center")
                b-input(placeholder="Nombre" v-model="nameCurse")
                br
                b-form-datepicker(id="example-datepicker" v-model="value" class="mb-2" placeholder="Tiempo estudiando")
                //- p Fecha: '{{ value }}'
                hr
                p PUBLICACIONES:
                b-form-checkbox(
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="Nos enseña"
                  unchecked-value="No")
                  p Nos enseña
                b-form-checkbox(
                  id="checkbox-2"
                  v-model="statusTwo"
                  name="checkbox-2"
                  value="Continúen"
                  unchecked-value="No")
                  p Continúen en el amor de Dios
                b-input(placeholder="Otra" v-model="statusThree")
                hr
                b-textarea(v-model="description" placeholder="Descripción del estudiante")
                hr
                label(for="exampleFormControlSelect1") Escoge el sexo de tu alumno
                select(class="form-control" id="exampleFormControlSelect1" v-model="sex")
                  option masculino
                  option femenino
                b-button(class="mt-3" variant="outline-success" block @click="toggleModal") {{ updateData ? "ACTUALIZAR" : "CREAR" }}

          ul(v-for="(c, index) in Card").dis
              Cards(:cardCurse="c").carril
                template(slot="footer")
                  b-button(variant="outline-danger" style="margin: 10px;" @click="deleteCard(index, c)") X
                  b-button(variant="outline-success" style="margin: 10px;" @click="updateCard(c)")
                    img(src="https://firebasestorage.googleapis.com/v0/b/myworkspace-b1621.appspot.com/o/images%2Ficons8-editar-48.png?alt=media&token=a2a74ca8-fc34-422e-8dbb-3a23f98f39ae" style="width: 26px;")
                    strong Editar
=======
        h1(align="center" style="color: #4C7493; font-weight: bold;") CURSOS
        p(align="center")
          strong {{ total }} estudio
          strong {{ filtro }}
        b-button(@click="showModal" style="margin-left: 11px;" variant="success")
          strong +
        b-button(slot="deleteMe" variant="outline-success" style="margin: 10px;" @click="$bvModal.show('bv-modal-example')")
          img(src="../../public/img/icons8-editar-48.png" style="width: 26px;")
          strong Editar
        h3
          b-modal(ref="my-modal" hide-footer :title=" updateData ? 'Actualizar el curso' : 'Crear un curso nuevo' ")
              div(class="d-block text-center")
              b-input(placeholder="Nombre" v-model="nameCurse")
              br
              b-form-datepicker(id="example-datepicker" v-model="value" class="mb-2" placeholder="Tiempo estudiando")
              //- p Fecha: '{{ value }}'
              hr
              p PUBLICACIONES:
              b-form-checkbox(
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="Nos enseña"
                unchecked-value="No")
                p Nos enseña
              b-form-checkbox(
                id="checkbox-2"
                v-model="statusTwo"
                name="checkbox-2"
                value="Continúen"
                unchecked-value="No")
                p Continúen en el amor de Dios
              b-form-checkbox(
                id="checkbox-3"
                v-model="statusThree"
                name="checkbox-3"
                value="Otra"
                unchecked-value="No")
                b-input(placeholder="Otra" v-model="statusOtra")
              hr
              p Estado:
                b-button(variant="success").xx Activo
                b-button(variant="danger").xx Inactivo
              hr
              b-textarea(v-model="description" placeholder="Descripción del estudiante")
              hr
              b-input(placeholder="Elija su sexo( masculino o femenino)" v-model="sex")
              b-button(class="mt-3" variant="outline-success" block @click="toggleModal") {{ updateData ? "ACTUALIZAR" : "CREAR" }}

          b-modal(ref="my-modalTWO" hide-footer title="Editar curso" v-if="!Create" id="bv-modal-example")
              div(class="d-block text-center")
              b-input(placeholder="Nombre" v-model="nameCurse")
              br
              b-form-datepicker(id="example-datepicker" v-model="value" class="mb-2" placeholder="Tiempo estudiando")
              p Fecha: '{{ value }}'
              hr
              p PUBLICACIONES:
              b-form-checkbox(
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="Nos enseña"
                unchecked-value="No")
                p Nos enseña
              b-form-checkbox(
                id="checkbox-2"
                v-model="statusTwo"
                name="checkbox-2"
                value="Continúen"
                unchecked-value="No")
                p Continúen en el amor de Dios
              b-form-checkbox(
                id="checkbox-3"
                v-model="statusThree"
                name="checkbox-3"
                value="Otra"
                unchecked-value="No")
                b-input(placeholder="Otra" v-model="statusOtra")
              hr
              p Estado:
                b-button(variant="success").xx Activo
                b-button(variant="danger").xx Inactivo
              hr
              b-textarea(v-model="description" placeholder="Descripción del estudiante")
              hr
              b-input(placeholder="Elija su sexo( masculino o femenino)" v-model="sex")
              ul(v-for="c in Card")
                b-button(class="mt-3" variant="outline-success" @click="editCard(c)") GUARDAR EN {{ c.name }}

        ul(v-for="(c, index) in Card").dis
            Cards(:cardCurse="c").carril
              template(slot="footer")
                b-button(variant="outline-danger" style="margin: 10px;" @click="deleteCard(index)") X
                b-button(variant="outline-success" style="margin: 10px;" @click="updateCard(c)") Upd
>>>>>>> 3a4088fd876a4b639bd6a71dd769310e10b55959
</template>

<script>
import Menu from "../components/Menu";
import Cards from "../components/CursosCard";
import { fb } from "@/helpers/firebase";

const firebaseCollection = "cursos";
const usuarioCollection = fb.firestore().collection("usuarios")

export default {
    name: "CoursesComponent",
    components: { Menu, Cards },

    data() {
      return {
        updateData: null,
<<<<<<< HEAD
        deleteData: null,
=======
>>>>>>> 3a4088fd876a4b639bd6a71dd769310e10b55959
        unsubscriber: null,
        value: '',
        nameCurse: '',
        status: 'No',
        statusTwo: 'No',
        statusThree: '',
        description: '',
        Card: [],
        sex: '',
        Create: false
      }
    },

    created() {
      this.requestInfo();
    },

    beforeDestroy() {
      if (typeof this.unsubscriber === "function") this.unsubscriber();
    },

    computed: {
      total() {
        return `Tienes ${this.Card.length}`
      },
      filtro() {
        return this.Card.length === 1 ? '' : 's';
      }
    },

    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide();
      },

      updateCard(data) {
        this.updateData = data;
        
        // Using data of v-models
        this.nameCurse = data.name;
        this.sex = data.sex;
        this.value = data.value;
        this.description = data.description;
        this.status = data.publication1;
        this.statusTwo = data.publication2;
        this.statusThree = data.publication3;
        
<<<<<<< HEAD
        this.showModal();
        if(this.hideModal) {
          console.log('Salió del modal');
        }
=======
        this.showModal()
>>>>>>> 3a4088fd876a4b639bd6a71dd769310e10b55959
      },
      requestInfo() {
        this.unsubscriber = usuarioCollection
          .doc(`dc_${fb.auth().currentUser.uid}`)
          .collection(firebaseCollection)
          .onSnapshot(querySnapshot => {
            let list = [];
            querySnapshot.forEach(function(doc) {
              list.push({id: doc.id, ...doc.data()});
            });
            this.Card = list;
    });
<<<<<<< HEAD
=======
      },
      async toggleModal() {
        const data = {
          name: this.nameCurse,
          description: this.description,
          value: this.value,
          sex: this.sex,
          publication1: this.status,
          publication2: this.statusTwo,
          publication3: this.statusThree,
        };
        
        // Save to firebase
        try {
          let databaseProcessor = usuarioCollection.doc(`dc_${fb.auth().currentUser.uid}`).collection(firebaseCollection);
          if (this.updateData) await databaseProcessor.doc(this.updateData.id).update(data)
          else await databaseProcessor.add(data)
          // this.Card.push(data);
          this.updateData = null;
          this.nameCurse = "";
          this.sex = '';
          this.value = "";
          this.description = "";
          this.status = 'No';
          this.statusTwo = 'No';
          this.statusThree = 'No';
          this.$refs['my-modal'].toggle('#toggle-btn')

          // TODO: Mensaje si funciona
        } catch (error) {
          console.error(error)
          // TODO: Mensaje si falla
        }
>>>>>>> 3a4088fd876a4b639bd6a71dd769310e10b55959
      },
      async toggleModal() {
        const data = {
          name: this.nameCurse,
          description: this.description,
          value: this.value,
          sex: this.sex,
          publication1: this.status,
          publication2: this.statusTwo,
          publication3: this.statusThree,
        };

        // Save to firebase
        try {
          let databaseProcessor = usuarioCollection.doc(`dc_${fb.auth().currentUser.uid}`).collection(firebaseCollection);
          if (this.updateData) await databaseProcessor.doc(this.updateData.id).update(data)
          else await databaseProcessor.add(data)
          // this.Card.push(data);
          this.updateData = null;
          this.nameCurse = "";
          this.sex = '';
          this.value = "";
          this.description = "";
          this.status = 'No';
          this.statusTwo = 'No';
          this.statusThree = '';
          this.$refs['my-modal'].toggle('#toggle-btn')

          // TODO: Mensaje si funciona
        } catch (error) {
          console.error(error)
          // TODO: Mensaje si falla
        }
      },

      deleteCard(index, data) {
        this.deleteData = data
        let databaseProcessor = usuarioCollection.doc(`dc_${fb.auth().currentUser.uid}`).collection(firebaseCollection);
        databaseProcessor.doc(this.deleteData.id).delete()
        this.Card.splice(index, 0)
      },
    }
}
</script>

<style scoped>
  .secondary {
    color: #fff;
    margin-left: 45px;
}

  .xx {
    margin-left: 50px;
  }

  .dis {
    display: inline-block;
    margin-left: -11px;
  }
</style>