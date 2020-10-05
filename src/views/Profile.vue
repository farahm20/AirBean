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
        <article class="order">
          <p class="order-num">{{ confirmation.orderNr }}</p>
          <p class="order-dots"> </p>
          <p class="order-date">{{ this.dateStamp }}</p>
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

      .order {
        display: flex;
    
      p {
        font-size: 14px;

        &.order-num {
          -webkit-text-stroke: thick;
          font-weight: 400;
        }
        &.order-dots {
          flex: 1;
          border-bottom: 1px dotted rgb(247, 241, 241);
        }

        &.order-date {
          font-size: 14px;
        }
      }
    }
  }
}
</style>