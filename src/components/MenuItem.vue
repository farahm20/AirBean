<template>
  <article class=menuItem>
      <h2>Do YOU SEE ME </h2>
      <h2 class="itemTitle">{{ menuItem.title}}</h2>
      <h2 class="itemDots">......</h2>
      <h2 class="itemPrice">{{ menuItem.price}}</h2>
      <p class="itemDesc">{{menuItem.desc}}</p>
<!--      <a href="#" class="plusBtn" @click.prevent="addToCart">+</a> -->
  </article>
</template>

<script>
export default {
    name: 'menuItem',
    props: {
        menuItem : Object
    }
}
</script>

<style>

</style>