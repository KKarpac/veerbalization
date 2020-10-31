<template>
  <div class="card-container">
    <div class="heading">
      <h1>{{ title }}</h1>
    </div>
    <div class="descripion">
      <p>{{ descripion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSmall',
  props: {
    title: String,
    descripion: String,
  }
}

</script>

<style>
.card-container {
  height: 350px;
  padding: 8px;
  width: 350px;
}

h1 {
  margin: 0;
}

p {
  margin: 0;
}

.heading {
  display: flex;
}

.descripion {
  background-color: #c88f3b;
  height: 250px;
}
</style>
