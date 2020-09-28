import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:5000',
    products: Array
  },
  mutations: {
    //saving items in state
    updateProducts(state, data) {
      state.products = data.products;
    }
  },
  actions: {
    /*Fetch data from api, save data(array of objects) in response, transform response in json
    commits data to updateProducts*/
    async fetchProducts(ctx) {
      try{
        let resp = await fetch(`${ctx.state.apiUrl}/products`); //array of objetcs, mode is also an object
          console.log(resp)

        let data = await resp.json();
          console.log(data);

        ctx.commit('updateProducts', data)
      }catch(error) {
        console.log(error)
      }
    }
  },
  getters: {
    products: state => {
      return state.products;
    }
  }
})
