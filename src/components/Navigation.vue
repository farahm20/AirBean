<template>
  <section class="navMain">
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
    <Menu v-if="showMenu"/>
  </section>
</template>

<script>
import Menu from "./../views/Menu";

export default {
  name: "Navigation",
  components: {
      Menu,
  },
  data() {
      return {
          showMenu: false,
      };
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

  .closeIcon {
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 40px;
    background-color: white;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 999rem;
  }

  .closeBtn {
    color: black;
    background-color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 999rem;
    position: absolute;
    left: 5px;
    top: 5px;
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