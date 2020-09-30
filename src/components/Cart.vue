<template>
  <aside id="cart">
    <section class="cart-items">
      <h2>Din beställning</h2>
      <article class="item" v-for="item in cart" :key="item.index">
        <h3 class="item-title">{{ item.title }}<span class="dots"></span></h3>
        <p class="item-price">{{ item.price * item.quantity }} kr</p>
        <div>
          <img
            src="./../assets/graphics/arrowUp.svg"
            alt="arrowUp"
            @click.prevent="addToItems(item)"
          />
          <p class="item-quantity">{{ item.quantity }}</p>
          <img
            src="./../assets/graphics/arrowDown.svg"
            alt="arrowDown"
            @click.prevent="removeFromCart(item)"
          />
        </div>
      </article>
      <footer class="total">
        <h3>
          Total cost:<span class="dots"></span> <b>{{ totalCost }} kr</b>
        </h3>
        <p>Inkl moms + drönarleverans</p>
        <a href="#" class="btn" @click="sendOrder">Take my Order</a>
      </footer>
    </section>
  </aside>
</template>

<script>
export default {
  name: "Cart",
  props: {
    item: Object,
  },
  methods: {
    addToItems(item) {
      this.$store.commit("addToItems", item);
    },
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
    sendOrder() {
      console.log("order sent");
      this.$store.dispatch("sendOrder");
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalCost() {
      let total = this.$store.state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return total;
    },
  },
};
</script>

<style lang = "scss">
@import "./../scss/variables";
#cart {
  position: absolute;
  padding: 1rem;
  top: 4rem;
  right: 2rem;
  width: calc(100vw - 4rem);
  .dots {
    color: red;
    border-bottom: 2px dotted rgba(0, 0, 0, 0.4);
  }
  .cart-items {
    position: absolute;
    top: 120%;
    background: white;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    color: brown;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item-title {
        font-size: 20px;
      }

      .item-price {
        font-size: 12px;
      }
      .item-quantity {
        font-size: 14px;
      }
    }
    h2,
    h3,
    p {
      color: $Brown;
      font-weight: 700;
    }

    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 23px;
    }
    p {
      font-size: 12px;
    }
    .btn {
      margin: 2rem 0 0 0;
      max-width: 100%;
    }
  }
}
</style>