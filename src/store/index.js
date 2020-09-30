import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'
import router from './../router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:5000',
    products: Array,
    cart: [],
    confirmed: Object,
    showNav: false
  },
  mutations: {
    closeNav(state) {
      state.showNav = !state.showNav;
    },
    toggleMenu(state) {
      state.showNav = !state.showNav;
    },
    //saving items in state
    updateProducts(state, data) {
      state.products = data.products;
    },
    addToCart(state, product) {
      //saves in local storage
      //checks if product is already in cart, if yes add quantity
      let index = state.cart.findIndex(item => item.id === product.id);
      console.log(index);

      if (index >= 0) {
        state.cart[index].quantity++;
      } else {
        state.cart.push({
          id: product.id,
          price: product.price,
          title: product.title,
          quantity: 1
        });
        console.log(state.cart);
      }
    },
    addToItems(state, product) {
      let itemFromCart = state.cart.find(item => item.id == product.id);
      if (itemFromCart) {
        itemFromCart.quantity++
      }
    },
    removeFromCart(state, product) {
      let itemIndex = state.cart.findIndex(item => item.id === product.id);
      console.log(itemIndex);

      let itemToRemove = state.cart[itemIndex]
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity--
      } else {
        state.cart.splice(itemIndex, 1)
      }
    },
    orderConfirmed(state, confirm) {
      state.confirmed = confirm.data;
    },
    emptyCart(state){
      state.cart = []
    }

  },
  actions: {
    /*Fetch data from api, save data(array of objects) in response, transform response in json
    commits data to updateProducts*/
    async fetchProducts(ctx) {
      try {
        let resp = await fetch(`${ctx.state.apiUrl}/products`); //array of objetcs, mode is also an object
        console.log(resp)

        let data = await resp.json();
        console.log(data);

        ctx.commit('updateProducts', data)
      } catch (error) {
        console.log(error)
      }
    },
    async sendOrder(ctx) {
      console.log({ items: ctx.state.cart })
      let data = await ax.post(`${ctx.state.apiUrl}/orders`, {
        items: ctx.state.cart
      })
      console.log("send order" + data)
      ctx.commit('orderConfirmed', data)
      ctx.commit('emptyCart')
      router.push('/status')
    },
    addToCart(ctx, product) {
      //vuex add to cart mutation
      this.$store.commit('addToCart', product);
    }
  },
  getters: {
    products: state => {
      return state.products;
    }
  }
})
