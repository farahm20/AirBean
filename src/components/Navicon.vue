<template>
    <nav class="navicon" @click="close">
      <img v-if="type === 'navicon'" src="./../assets/graphics/navicon.svg" alt="navicon">
      <img v-if="type === 'close'" src="./../assets/graphics/close.svg" alt="close">
    </nav>   
</template>

<script>
export default {
    name: 'Navicon',
    props: {
      type: String
    },
    methods: {
      close(){
        this.$store.commit('toggleMenu');
      },
      navigation() {
          return this.$store.state.navigation;
      },
        
    }
}
</script>

<style lang = "scss">
    .navicon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 15px;
        color: black;
       
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 999rem;
    }
</style>