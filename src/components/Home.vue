<template>
  <div id="app">
    <Banner />
    <div class="cards-container">
      <CardSmall title="DOJO" descripion="Learn what you want"/>
      <CardSmall title="M & M" descripion="Mixing & Masering"/>
      <CardSmall title="Music Label" descripion="KuyKuy" />
    </div>
    <CardLarge title="Testimonials" imageName="profile_cropped.png" subtitle="Vruno" text="Hi im Bruno, and I'm an Electronic Music Producer and I got a music project called VRuno, I’m third generation from a musicians family and currently living from the music since 2015, I live in Berlin."/>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import CardSmall from './CardSmall.vue'
import CardLarge from './CardLarge.vue'


export default {
  name: 'Home',
  components: {
    Banner,
    CardSmall,
    CardLarge
  }
}
</script>

<style>
.cards-container {
  display: flex;
  justify-content: center;
  margin:24px 75px;
}
</style>
