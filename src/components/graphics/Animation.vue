<template lang="pug">
    #everything
      b-card.cir
        .circle
          img(src="https://firebasestorage.googleapis.com/v0/b/myworkspace-b1621.appspot.com/o/images%2Fmariposa.png?alt=media&token=138c2f3a-5da7-4ab5-8604-28502dfc3683" width="109px")
        p(align="center" style="margin-top: -54px; font-size: 24px;") Cargando ...
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style scoped>
.circle {
  position: relative;
  top: 50px;
  left: 50%;
  width: 100px;
  height: 100px;
  border: solid 8px transparent;
  border-radius: 50%;
  animation: loaderM 2s linear infinite;
}

.cir {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    top: 0;
    height: 100%;
}

#everything {
    width: 100%;
    height: 100%;
    position: absolute;
}

@keyframes loaderM {
  0% {
    transform: translate(-0%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-80%, -50%) rotate(360deg);
  }
}
</style>
