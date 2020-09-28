<template>
  <h1>The Menu Page</h1>

</template>

<script>
export default {
    name: 'Menu',
    components: {
    },
    computed: {
      menuItems(){
        return this.$store.getters.products;
      }
    }
}
</script>

<style lang = "scss">
  
</style>