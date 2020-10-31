<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <router-link
          to="Home"
          class="nav-item nav-link"
          active-class="active"
          exact >
          Home
        </router-link>
      </div>
      <div class="links">
        <router-link
          to="Dojo"
          class="nav-item nav-link"
          active-class="active"
          exact >
          Dojo
        </router-link>
        <router-link
          to="MandM"
          class="nav-item nav-link"
          active-class="active"
          exact >
          M & M
        </router-link>
        <router-link
          to="MusicLabel"
          class="nav-item nav-link"
          active-class="active"
          exact>
          Music Label
          </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style>
.navbar {
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: center;
}

.nav-container {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 50%;

}

.links {
  width: 50%;
  margin: 0 50px;
  display: inline-flex;
  text-align: center;
}

.nav-link {
  margin: 0 16px;
}

</style>
