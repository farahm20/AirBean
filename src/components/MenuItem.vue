<template>
  <article class="menuItem">
    <aside class="addItemBtn" @click.prevent="addToCart">
      <img src="./../assets/graphics/add.png" alt="add" />
    </aside>
    <h2 class="itemTitle">{{ product.title }}</h2>
    <span class="dots"></span>
    <h2 class="itemPrice">{{ product.price }}</h2>
    <p class="itemDesc">{{ product.desc }}</p>
    <!--      <a href="#" class="plusBtn" @click.prevent="addToCart">+</a> -->
  </article>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    product: Object,
  },
  data(){
    return {
  
    }
  },
  methods: { 
    addToCart(){
      this.$store.commit('addToCart', this.product)
    }
  } 
};
</script>

<style lang="scss">
@import "./../scss/variables";

.menuItem {
  display: grid;
  grid-template-columns: 20% 60% 25%;
  grid-template-rows: auto;
  grid-template-areas: "btn title price"
                       "btn desc desc";
  margin: 0 0 1.2rem 0;

  .addItemBtn {
    @include reset-mp;
    grid-area: btn;
  }

  .itemTitle {
    @include reset-mp;
    margin-top: 14px;
    grid-area: title;
    display: flex;
    flex-flow: row;
  }

  .itemPrice {
    @include reset-mp;
    margin-top: 14px;
    grid-area: price;  
  }

  .itemDesc {
    @include reset-mp;
    grid-area: desc;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
}
</style>