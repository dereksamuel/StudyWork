<template lang="pug">
    #curses
        Menu
        b-card#cursesp
            template(v-slot:header)
                h2 Tareas
                    b-button(@click="showModal" style="margin-left: 11px; border-radius: 50px;" variant="success")
                        strong +
            p(align="center") 
                strong {{ filterWorks }}
                strong {{ filtro }}
            .countainer
                ul(v-for="(cardWork, index) in Work").dist
                    WorkCard(:Worker="cardWork")
                        template(slot="footer")
                            b-button(variant="outline-danger" style="margin: 10px;" @click="deleteCard(index, cardWork)") X
                            b-button(variant="outline-success" style="margin: 10px;" @click="updateCard(cardWork)")
                                img(src="https://firebasestorage.googleapis.com/v0/b/myworkspace-b1621.appspot.com/o/images%2Ficons8-editar-48.png?alt=media&token=a2a74ca8-fc34-422e-8dbb-3a23f98f39ae" style="width: 26px;")
                                strong Editar
                            div(style="background: rgb(235, 235, 235); color: #909090; padding: 16px;")
                                p De la publicación: 
                                p
                                    strong(v-if="cardWork.publication1 != 'No'") {{ cardWork.publication1 }} 
                                p
                                    strong(v-if="cardWork.publication2 != 'No'") {{ cardWork.publication2 }} 
                                p
                                    strong(v-if="cardWork.publication3 != 'No'") {{ cardWork.publication3 }} 
        b-modal(ref="my-modal" hide-footer :title=" updateData ? 'Actualizar la tarea' : 'Crear una tarea nueva' " cancelVariant="danger")
                div(class="d-block text-center")
                b-textarea(placeholder="Tarea" v-model="nameWork")
                hr
                p PUBLICAIÓN DE LA TAREA:
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
                b-button(class="mt-3" variant="outline-success" block @click="toggleModal") {{ updateData ? "ACTUALIZAR" : "CREAR" }}
        br
        br
</template>

<script>
import Menu from "../components/Menu";
import { fb } from "@/helpers/firebase";
import WorkCard from "@/components/WorkCard";

const firebaseCollection = "tareas";
const usuarioCollection = fb.firestore().collection("usuarios")

export default {
    name: 'Work',
    components: { Menu, WorkCard },
    data() {
        return {
            updateData: null,
            deleteData: null,
            unsubscriber: null,
            nameWork: '',
            status: 'No',
            statusTwo: 'No',
            statusThree: '',
            Work: [],
            Create: false
        }
    },
    computed: {
        filterWorks() {
            return `Tienes ${this.Work.length} tarea`
        },
        filtro() {
        return this.Work.length === 1 ? '' : 's';
        }
    },
    beforeDestroy() {
        if (typeof this.unsubscriber === "function") this.unsubscriber();
    },
    created() {
        this.requestInfo();
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
        this.nameWork = data.name;
        this.status = data.publication1;
        this.statusTwo = data.publication2;
        this.statusThree = data.publication3;
        
        this.showModal();
        if(this.hideModal) {
            console.log('Salió del modal');
        }
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
            this.Work = list;
    });
    },
    async toggleModal() {
        const data = {
        name: this.nameWork,
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
            this.nameWork = "";
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
        this.Work.splice(index, 0)
      },
    }
}
</script>

<style scoped>
    #cursesp {
        border-radius: 25px;
        background-color: rgb(243, 243, 243);
        height: auto;
        display: block;
        margin-left: 45px;
        margin-right: 45px;
        margin-top: 45px;
    }

    .dist {
        margin-top: 45px;
        padding-inline-start: 0px;
    }
</style>