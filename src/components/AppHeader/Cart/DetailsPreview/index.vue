<template>
  <div class="wrapper">
    <ul class="items">
        <li class="item" v-for="(detail, i) in details">
          <h3 class="detail-name">Стекло</h3>
          <div class="price-wrapper">
            <span class="detial-price">{{1500 * i + 1}} P</span>
            <div class="add-more">
              <button class="sign" @click="subtractDetail(detail)"> - </button>
              <input type="text" class="amount" v-model="detail.amount">
              <button class="sign" @click="addDetail(detail)"> + </button>
            </div>
          </div>
        </li>
      </ul>
      <div class="total">
        На сумму {{totalPrice}} Р
        <button>В корзину</button>
        <button>к оплате</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPreview',
  props: {
    details: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    totalPrice() {
      return 10000
    }
  },
  methods: {
    // subtractDetail(detail) {
    //   if (detail.amount > 0) {
    //     detail.amount = detail.amount - 1
    //   }
    // },
    // addDetail(detail) {
    //   detail.amount = detail.amount + 1
    // }
  }
}
</script>

<style>

</style>
