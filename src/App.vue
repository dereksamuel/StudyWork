<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { fb } from "./helpers/firebase";

export default {
  name: 'App',

  mounted() {
    console.log(fb);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
