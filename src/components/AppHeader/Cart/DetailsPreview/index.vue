<template>
  <div>
  <div class="wrapper">
    <ul class="items">
        <li class="item" v-for="(detail, i) in details">
          <div class="detail-name">{{detail.detailName}}</div>
          <div class="price-wrapper">
            <div class="detial-price">
              <span class="price">{{detail.deliveryPrice}} P</span>
              <span class="bucket" @click="removeFromCart">Удалить</span>
            </div>
            <div class="add-more">
              <button class="sign" @click.stop="changeAmount({ detailId: detail.id, sign: '-' })"> - </button>
              <input type="text" class="amount" v-model="detail.amount">
              <button class="sign" @click.stop="changeAmount({ detailId: detail.id, sign: '+' })"> + </button>
            </div>
          </div>
        </li>
      </ul>
      <div class="total">
        <div>
          <span>На сумму: </span>
          <span>{{getTotalPrice}} Р</span>
        </div>        
      </div>
      <div class="actions">
        <button class="btn black">В корзину</button>
        <button class="btn full-red">к оплате</button>
      </div>
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
    getTotalPrice() {
      const mapped = this.details.map(detail => detail.amount * detail.deliveryPrice);
      return mapped.reduce((a, b) => a + b);
    }
  },
  methods: {
    ...mapMutations('Cart', [
      'changeAmount'
    ]),
    ...mapMutations('Cart', [
      'removeFromCart'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
