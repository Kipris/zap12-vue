<template>
  <div class="modal-backdrop">
    <div class="modal">
        <div class="modal-content">
          <div class="modal-title">
          <div class="h1">1 товар в корзине</div>
          <span class="cross" @click="close">✖</span>
        </div>

        <div class="modal-body">
        <table>
          <thead>
            <th>Производитель</th>
            <th>Артикул</th>
            <th>Наименование</th>
            <th>Кол-во</th>
            <th>Цена</th>
          </thead>
          <tbody>
            <tr v-for="detail in cartItems">
              <td>{{detail.producer}}</td>
              <td>{{detail.vendor}}</td>
              <td class="detail-name">
                <span>{{detail.name}}</span>
                <span class="trash" @click="removeFromCart({ id: detail.id })"></span>
              </td>
              <td class="amount-row">
                <!-- <button class="sign" @click.stop="changeAmount({ detailId: detail.id, sign: '-' })"> - </button>
                <input type="text" class="amount" v-model="detail.amount">
                <button class="sign" @click.stop="changeAmount({ detailId: detail.id, sign: '+' })"> + </button> -->
                <button class="sign" @click="changeAmount({ detailId: detail.id, sign: '-' })"> - </button>
                <input type="text" class="amount" :value="detail.amount">
                <button class="sign" @click="changeAmount({ detailId: detail.id, sign: '+' })"> + </button>
              </td>
              <td class="price-row">
                {{detail.selectedPrice}} Р
              </td>
            </tr>
          </tbody>
        </table>

        <div class="options">
          <div class="h1">ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ</div>

          <section>
              <div class="promocode accordion">
                <input class="accordion-checkbox" id="ac-1" type="checkbox" />
                <label class="accordion-label heading" for="ac-1" :class="{ disabled: promocodeIsDisabled }">
                  <span class="icon promocode-icon"></span>
                  <span class="title">Промокод</span>
                  <span class="chevron-icon"></span>
                </label>
                <div class="accordion-body" v-if="!promocodeIsDisabled">
                  <div class="input-wrap">
                    <input type="text" placeholder="Введите промокод">
                    <button class="btn black">Применить промокод</button>
                  </div>
                </div>
              </div>
          </section>

          <section>
              <div class="delivery accordion">
                <input class="accordion-checkbox" id="ac-2" type="checkbox"/>
                <label  class="accordion-label heading" for="ac-2" :class="{ disabled: deliveryIsDisabled }">
                  <span class="icon delivery-icon"></span>
                  <span class="title">Доставка</span>
                  <span class="chevron-icon"></span>
                </label>
                <div class="accordion-body" v-if="!deliveryIsDisabled">
                  <div>
                    <label>
                      <input type="radio" name="delivery">
                      Курьером
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="delivery">
                      Самовывоз
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="delivery">
                      Почтой России
                    </label>
                  </div>
                </div>
              </div>
          </section>

          <section>
              <div class="payment-variants accordion">
                <input class="accordion-checkbox" id="ac-3" type="checkbox" />
                <label class="accordion-label heading" for="ac-3" :class="{ disabled: paymentIsDisabled }">
                  <span class="icon payment-icon"></span>
                  <span class="title">Варианты оплаты</span>
                  <span class="chevron-icon"></span>
                </label>
                <div class="accordion-body" v-if="!paymentIsDisabled">
                  <div>Оплата электронными способами оплаты с помощью Robokassa 
                    (Электронным кошельком, Через интернет-банк, Банковской картой, 
                    В терминале, Сотовые операторы, Другие способы)</div>
                  <div>
                    <label>
                      <input type="radio" name="payment">
                      50% от суммы заказа
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="payment">
                      Вся сумма заказа
                    </label>
                  </div> 
                </div>
              </div>
          </section>
        </div>
        
        <div class="total-sum">
          <div class="total">
            <span>Сумма заказа</span>
            <!-- <span>2 439 Р</span> -->
            <span>{{totalPrice}} P</span>
          </div>
          <div class="discount">
            <span>Со скидкой</span>
            <span class="red">2 149 Р</span>
          </div>
        </div>
        <div class="actions">
          <button class="btn black">Пересчитать</button>
          <button class="btn full-red">Оформить</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'


export default {
  name: 'CartModal',
  props: {
    cartItems: {
      type: Array
    }
  },
  data() {
    return {
      promocodeAccordion: false,
      deliveryAccordion: false,
      paymentAccordion: false,
      promocodeIsDisabled: true,
      deliveryIsDisabled: false,
      paymentIsDisabled: false
    }
  },
  computed: {
    totalPrice() {
      const mapped = this.cartItems.map(detail => detail.amount * detail.selectedPrice);
      return mapped.reduce((a, b) => a + b);
    }
  },
  methods: {
    ...mapMutations('Cart', [
      'changeAmount',
      'removeFromCart'
    ]),
    promocodeCollapse() {
      if (this.promocodeIsDisabled !== false) {
        this.promocodeAccordion = !this.promocodeAccordion
        this.deliveryAccordion = false
        this.paymentAccordion = false
      }
    },
    deliveryCollapse() {
      if (this.deliveryIsDisabled !== false) {
        this.promocodeAccordion = false
        this.deliveryAccordion = !this.deliveryAccordion
        this.paymentAccordion = false
      }
    },
    paymentCollapse() {
      if (this.paymentIsDisabled !== false) {
        this.promocodeAccordion = false
        this.deliveryAccordion = false
        this.paymentAccordion = !this.paymentAccordion
      }
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
