<template>
  <main id="landing" v-on:click="$router.push('/menu')">
    <img src="./../assets/graphics/landing-logo.svg" alt="landing" />
  </main>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style lang = "scss">
@import "./../scss/variables";
body {
  #landing {
    background-color: $backgroundGreen;
    height: 100vh;
    @include flex-center;
    @include reset-mp;
    background-image: url("./../assets/graphics/left-leaves.svg"),
      url("./../assets/graphics/right-leaves.svg");
    background-position: top left, top right;
    background-repeat: no-repeat, no-repeat;
    background-size: auto 100%, auto 100%;
  }
}
</style>