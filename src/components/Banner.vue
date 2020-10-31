<template>
  <div>
    <div class="banner">
      <div class="banner-text">
        <h1>Music Production</h1>
        <p>
          Hi im Bruno, and I'm an Electronic Music Producer and I got a music project called VRuno, I’m third generation from a musicians family and currently living from the music since 2015, I live in Berlin.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style>
.banner {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: url(../assets/studio_cropped.png);
  width: 1200px;
  height: 610px;
  background-repeat: no-repeat;
  background-size: 1200px 610px;
}

.banner-text {
  width: 600px;
  text-align: left;
}

</style>
