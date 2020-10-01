<template>
  <main id="profile">
    <Navicon />
    <ProfileForm v-if="!profile.name.length" />
    <section class="customer">
      <img src="./../assets/graphics/Profile.svg" alt="" />
      <h2>{{ profile.name }}</h2>
      <p class="email">{{ profile.email }}</p>
      <section class="orderHistory">
        <h1>Orderhistorik</h1>
        <article class="numAndDate">
          <p class="bold">{{ confirmation.orderNr }}</p>
          <p class="dots"> </p>
          <p>{{ this.dateStamp }}</p>
        </article>
      </section>
    </section>
  </main>
</template>

<script>
import Navicon from "@/components/Navicon";
import ProfileForm from "@/components/ProfileForm";

export default {
  name: "Profile",
  data() {
    return {
      dateStamp: "",
    };
  },
  components: {
    Navicon,
    ProfileForm,
  },
  methods: {
    dateFunction() {
      var currentDate = new Date();
      console.log(currentDate);
      var formattedDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
      console.log(formattedDate);
      this.dateStamp = formattedDate;
      console.log("date:" + this.dateStamp);
    },
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    confirmation() {
      return this.$store.state.confirmed;
    },
  },
  mounted() {
    this.dateFunction();
  },
};
</script>

<style lang="scss">
@import "./../scss/variables";

body {
  #profile {
    height: 100vh;
    background: $Brown;
  }

  .customer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    .email {
      color: white;
      margin: 0;
    }
  }

  .orderHistory {
    text-align: justify;
    align-self: end;

    .numAndDate {
      display: flex;
    }
    h1 {
      font-size: 22px;
    }
    p {
      margin: 0;
      font-size: 14px;
    }
    .bold {
      -webkit-text-stroke: thick;
     margin-right: 130px;
    }
    .dots {
      flex: 1;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
}
</style>