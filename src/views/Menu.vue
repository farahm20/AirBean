<template>
  <main id="menu">
    <section class="icons">
      <Navicon />
      <CartIcon />
    </section>
    <h1 class="heading">Menu</h1>
    <MenuItem v-for="item in product" :key="item.id" :product="item" />
  </main>
</template>

<script>
import CartIcon from "@/components/CartIcon";
import Navicon from "@/components/Navicon";
import MenuItem from "@/components/MenuItem";

export default {
  name: "Menu",
  components: {
    MenuItem,
    CartIcon,
    Navicon,
  },
  computed: {
    product() {
      return this.$store.getters.products;
    },
    menu() {
      return this.$store.state.menu;
    },
  },
};
</script>

<style lang = "scss">
@import "./../scss/variables";
body {
  #menu{
    background-color: $backgroundPink;
  }

}
</style>