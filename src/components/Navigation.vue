<template>
  <section class="navMain">
  <div class="closeNav" @click="toggleMenu"></div> 
  <Navicon :type="'close'" v-if="showMenu"/>
    <section class="closeIcon">
      <img
        src="./../assets/graphics/close.svg"
        alt="close"
        class="closeBtn"
        @click="toggleMenu"
      />
    </section>
    <nav id="navigation">
      <a href="#" @click="goTo('/menu')">Meny</a>
      <p class="addSpace"></p>
      <a href="#" @click="goTo('/about')">Vårt Kaffe</a>
      <p class="addSpace"></p>
      <a href="#" @click="goTo('/profile')">Min Sida</a>
      <p class="addSpace"></p>
      <a href="#" @click="goTo('/status')">Orderstatus</a>
    </nav>
  </section>
</template>

<script>
import Navicon from './Navicon';
export default {
  name: "Navigation",
  components: {
      Navicon,
  },
  computed: {
    showMenu() {
      return this.$store.state.showNav;
    }
  },
  methods: {
    menu() {
        return this.$store.state.menu;
    },
    toggleMenu() {
      this.$store.commit('toggleMenu');
    },
    goTo(route) {
      this.$store.commit('toggleMenu');
      if (route !== this.$route.path) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style lang = "scss">
@import "./../scss/variables";
.navMain {
  position: absolute;
  padding: 1rem;
  right: 0rem;
  top: 0rem;
  width: 100%;
  height: 100%;
  background: #2f2926;
  z-index: 1;
  display: flex;
  flex-direction: column;


  .navicon {
    margin-top: 50px;
    margin-left: 40px;
    margin-bottom: 0;
  }


  #navigation {
      margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      font-family: PT Serif;
      font-style: normal;
      font-size: 30px;
      color: #ffffff;
      text-decoration: none;
      margin: 1rem;
    }
    p {
      height: 1px;
      width: 48px;
      background: rgba(255, 255, 255, 0.2);;
    }
  }
}
</style>