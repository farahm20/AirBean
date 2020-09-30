<template>
  <aside class="cartIcon">
    <aside class="cartLength">{{ cartLength }}</aside>
    <img
      src="./../assets/graphics/bag.svg"
      alt=""
      class="bag"
      @click="showCart = !showCart"
    />
    <Cart v-if="showCart" />
  </aside>
</template>

<script>
import Cart from "./Cart";

export default {
  name: "CartIcon",
  components: {
    Cart,
  },
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartLength() {
      let length = 0;
      this.$store.state.cart.forEach((item) => {
        length += item.quantity;
      });
      console.log(length);
      return length;
    },
  },
};
</script>


<style lang="scss">
@import "./../scss/variables";

.cartIcon {
  color: white;
  background-color: black;
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 999rem;

  .cartLength {
    width: 20px;
    height: 20px;
    border-radius: 999rem;
    background-color: red;
  }
  .bag {
    position: relative;
    margin-top: -6px;
  }
}
</style>