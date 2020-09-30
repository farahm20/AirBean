<template>
    <nav class="navicon">
        <img src="./../assets/graphics/navicon.svg" 
        alt="navicon"
        @click="showNav = !showNav"
        />
        <Navigation v-if="showNav"/>
    </nav>   
</template>

<script>
import Navigation from "./Navigation";

export default {
    name: 'Navicon',
    components: {
        Navigation,
    },
    data() {
        return {
            showNav: false,
        };
    },
    methods: {
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
        background-color: white;
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 999rem;
    }


</style>