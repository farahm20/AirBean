<template>
    <main id="menuProducts">
        <h1>The Products Page</h1>
            <MenuItem
            v-for="item in product"
            :key="item.id"
            :product ="item"/>
    </main>
</template>
<script>
import MenuItem from '@/components/MenuItem';
export default {
    name: 'Products',
    components: {
      MenuItem
    },
    computed: {
      product(){
        return this.$store.getters.products;
      }
    }
}
</script>

<style lang = "scss">
  
</style>