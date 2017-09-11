<template>
  <div class="wrapper">
    <ul class="items">
        <li class="item" v-for="(detail, i) in details">
          <div class="detail-name">Стекло</div>
          <div class="price-wrapper">
            <div class="detial-price">
              <span class="price">{{1500 * i + 1}} P</span>
              <span class="bucket"></span>
            </div>
            <div class="add-more">
              <button class="sign" @click="subtractDetail(detail)"> - </button>
              <input type="text" class="amount" v-model="detail.amount">
              <button class="sign" @click="addDetail(detail)"> + </button>
            </div>
          </div>
        </li>
      </ul>
      <div class="total">
        <div>
          <span>На сумму: </span>
          <span>{{totalPrice}} Р</span>
        </div>        
      </div>
      <div class="actions">
        <button class="btn black">В корзину</button>
        <button class="btn full-red">к оплате</button>
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

<style lang="scss" scoped>
  @import 'styles';
</style>
