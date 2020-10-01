<template>
  <section class="form">
    <header>
      <img src="./../assets/graphics/smallLogo.svg" alt="smallLogo" />
      <h2>Välkommen till airbeanfamiljen!</h2>
      <p>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
    </header>

    <label for="name">Namn</label>
    <input type="text" name="name" v-model="name" />
    <label for="email">Namn</label>
    <input type="email" name="email" v-model="email" />
    <label for="gdpr">
      <input type="checkbox" name="gdpr" v-model="gdpr" /> GDPR OK!
    </label>
    <a href="#" class="btn" @click="registerCustomer"> Brew me a cup!</a>
  </section>
</template>

<script>
export default {
    name: 'ProfileForm',
    data(){
        return {
            name: '',
            email: {
                email: '',
                valid: false
            },
            gdpr: false
        }
    }, 
    methods: {
        registerCustomer(){
            alert("You are registered");
        }
    }
};
</script>

<style lang="scss">
@import "./../scss/variables";
label{
    @include reset-mp;
}

</style>