<template>
  <div class="wrapper">
    <ul class="items">
        <li class="item" v-for="(detail, i) in details">
          <h3 class="detail-name">Стекло</h3>
          <div class="price-wrapper">
            <span class="detial-price">{{1500 * i + 1}} P</span>
            <div class="add-more">
              <button class="sign" @click="changeAmount({ detail: detail.id, sign: '-' })"> - </button>
              <input type="text" class="amount" v-model="detail.amount">
              <button class="sign" @click="changeAmount({ detail: detail.id, sign: '+' })"> + </button>
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
import { mapMutations } from 'vuex'

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
    ...mapMutations('Cart', [
      'changeAmount'
    ])
  }
}
</script>

<style>

</style>
