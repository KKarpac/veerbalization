<template>
  <div id="app">
    <img src="@/assets/studio.jpg">
    <HelloWorld msg="Music Production"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@font-face {
  font-family: "marinfordaf";
  src: local("marinfordaf"),
   url(./fonts/marinfordaf.ttf) format("truetype");
}

body {
  background-image: url("assets/background.png");
}


#app {
  font-family: "marinfordaf", Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  margin-top: 60px;
}

</style>
