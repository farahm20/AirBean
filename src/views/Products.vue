<template>
    <main id="menuProducts">
        <h1>The Products Page</h1>
            <Product
            v-for="item in product"
            :key="item.id"
            :product ="item"/>
    </main>
</template>
<script>
import Product from '@/components/Product';
export default {
    name: 'Products',
    components: {
      Product
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