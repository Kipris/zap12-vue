<template>
  <div>
  <div class="wrapper">
    <ul class="items">
        <li class="item" v-for="(detail, i) in details">
          <div class="detail-name">{{detail.name}}</div>
          <div class="price-wrapper">
            <div class="detial-price">
              <!-- TODO computed for universal price -->
              <span class="price">{{detail.selectedPrice}} P</span>
              <span class="bucket" @click="removeFromCart({ id: detail.id })">Удалить</span>
            </div>
            <div class="add-more">
              <button class="sign" @click.stop="changeAmount({ bookId: detail.bookId, sign: '-' })"> - </button>
              <input type="text" class="amount" v-model="detail.amount">
              <button class="sign" @click.stop="changeAmount({ bookId: detail.bookId, sign: '+' })"> + </button>
            </div>
          </div>
        </li>
      </ul>
      <div class="total">
        <div>
          <span>На сумму: </span>
          <!-- <span>10000 Р</span> -->
          <span>{{getTotalPrice}} Р</span>
        </div>        
      </div>
      <div class="actions">
        <button class="btn black" @click="showCartModal = true">В корзину</button>
        <button class="btn full-red">к оплате</button>
      </div>
  </div>
  <CartModal v-if="showCartModal"
             @close="showCartModal = false"
             :cartItems="details"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CartModal from '@/components/AppHeader/CartModal'

export default {
  name: 'DetailPreview',
  props: {
    details: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showCartModal: false
    }
  },
  computed: {
    getTotalPrice() {
      const mapped = this.details.map(detail => detail.amount * detail.selectedPrice);
      return mapped.reduce((a, b) => a + b);
    }
  },
  methods: {
    ...mapMutations('Cart', [
      'changeAmount',
      'removeFromCart'
    ])
  },
  components: {
    CartModal
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
