<template lang="pug">
    .countainer
        b-card-text(style="margin-left: 10px; margin-top: 5px; font-size: 18px;") {{ Worker.name }}
        slot(name="footer")
</template>

<script>
//import { fb } from "../helpers/firebase";

//const messaging = fb.messaging();
//messaging.usePublicVapidKey("BInQC-BjF6RmBjoL5G-inQI9VlImfLB5NZs5EL4N3jMDnNzgQKnvk9LGU2_7d-WcS94lSWkKTtcOEgyH-he2wQE");

export default {
    name: "CardWork",
    props: {
        Worker: { type: Object, required: true }
    },

    //created() {
        //Notification.requestPermission().then((permission) => {
            //if (permission === 'granted') {
                //console.log('Notification permission granted.');
                // TODO(developer): Retrieve an Instance ID token for use with FCM.
                // ...
            //} else {
                //console.log('Unable to get permission to notify.');
            //}
        //});
    //},

    data() {
        return {
            z: '../../public/img/empresario.png',
            x: '../../public/img/mujer-de-negocios.png'
        }
    }
}
</script>

<style scoped>
    .countainer {
        background: #fff;
        box-shadow: 2px 2px 10px;
    }
</style>