<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="card-info">
      <div class="info-photo">
        <img :src="require('@/assets/' + imageName)">
      </div>
      <div class="info-text">
        <h2>{{ subtitle }}</h2>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardLarge',
  props: {
    title: String,
    imageName: String,
    subtitle: String,
    text: String
  }
}
</script>

<style>
.container {
  height: 350px;
  padding: 8px;
  overflow: hidden;
  margin: 24px 75px;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

.card-info {
  margin: 0;
  display: flex;
}

.info-photo{
  min-width: 50%;
  height: 333px;
}

h1 {
  text-align: left;
}

.info-text {
  text-align: left;
}
</style>
