<template>
  <router-view />
</template>
<script>
import { fb } from "./helpers/firebase";

export default {
  name: 'App',

  mounted() {
    fb.auth().onAuthStateChanged(user => {
      if (user) this.$router.push({ name: "home" });
      else this.$router.push({ name: "login" });
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Baloo+2|Courgette&display=swap');

#app {
    font-family: 'Baloo 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
