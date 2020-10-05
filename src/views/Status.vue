<template>
  <main class="status">
    <section class="text">
      <p></p>
      <p class="orderNum">Ordernummer: {{ confirmation.orderNr }}</p>
      <p></p>
      <img src="./../assets/graphics/droneCup.svg" alt="droneCup" />
      <section class="confirmation">
        <h1 class= "msg">{{ confirmation.msg }}</h1>
        <p class = "timeStamp">{{ confirmation.timeStamp }} mins</p>
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
    font-family: PT Serif;
  }

  p, h1 {
    color: white;
  }
  .orderNum {
    margin-top: 60px;
    font-size: 15px;
  }
  .msg {
    font-size: 35px;
    font-weight: 700;
  }
  .timeStamp {
    font-size: 20px;
    font-weight: 500;
  }

  img{
    animation: fly 4s linear infinite;
  }

  @keyframes fly {
    0% { transform: translateY(0) rotateZ(0deg); }
    25% {transform: translateZ(.5rem) rotateY(120deg); } 
    50% { transform: translateY(1rem) rotateZ(0deg); }
    100% { transform: translateY(0) rotateZ(0deg); }
  }
}
</style>