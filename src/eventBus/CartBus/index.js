import Vue from 'vue'

const CartBus = new Vue({
  data: {
    details: []
  },
  methods: {
    addDetail(detail) {
      this.details.push(detail)
    }
  }
})
export default CartBus
