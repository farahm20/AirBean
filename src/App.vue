<template>
  <div id="app">
   <Navigation v-if="showNav"/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
 export default {
   name: 'App',
   components: {
     Navigation
   },
   computed: {
     showNav(){
       return this.$store.state.showNav;
     }
   },
   beforeMount() {
     this.$store.dispatch('fetchProducts');
   }
 }
</script>

<style lang="scss">
  @import "./scss/main";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
