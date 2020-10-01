<template>
  <main class="status">
    <section class="text">
      <p></p>
      <b>Ordernummer: {{ confirmation.orderNr }}</b>
      <p></p>
      <img src="./../assets/graphics/droneCup.svg" alt="droneCup" />
      <section class="confirmation">
        <h1>{{ confirmation.msg }}</h1>
        <p>{{ confirmation.timeStamp }}</p>
      </section>
    </section>
    <a href="#" class="btn" @click="$router.push('/menu')">Ok, cool!</a>
  </main>
</template>

<script>
export default {
  name: "Status",
  computed: {
    confirmation() {
      return this.$store.state.confirmed;
    },
  },
};
</script>

<style lang = "scss">
@import "./../scss/variables";
body {
  background: $Orange;
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>