<template>
  <article class=menuItem>
      <h2>Do YOU SEE ME </h2>
      <h2 class="itemTitle">{{ product.title}}</h2>
      <h2 class="itemDots">......</h2>
      <h2 class="itemPrice">{{ product.price}}</h2>
      <p class="itemDesc">{{product.desc}}</p>
<!--      <a href="#" class="plusBtn" @click.prevent="addToCart">+</a> -->
  </article>
</template>

<script>
export default {
    name: 'product',
    props: {
        product : Object
    }
}
</script>

<style>

</style>