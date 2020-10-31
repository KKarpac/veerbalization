<template>
  <div>
    <AppNav />
    <router-view />
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  name: 'App',
  components: {
    // Home,
    AppNav
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
  background-image: url("assets/background_cropped.png");
  background-size: cover;
  height: 1400px;
}


#app {
  font-family: "marinfordaf", Helvetica;
  text-align: center;
  color: whitesmoke;
  margin-top: 60px;
  width: 1200px;
  margin:0 auto;
}

a {
  color: whitesmoke;
  font-family: "marinfordaf"
}
</style>
