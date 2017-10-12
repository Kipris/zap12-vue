<template>
  <transition name="fade">
    <div class="modal-backdrop">
      <div class="modal">
          <div class="modal-content" id="scrollbar">
            <div class="modal-title">
              <div class="h1">1 товар в корзине</div>
              <span class="cross" @click="close">✖</span>
            </div>
            <div class="modal-body">
              <div class="table-wrap" id="scrollbar">
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
                      <td>{{detail.number}}</td>
                      <td class="detail-name">
                        <span>{{detail.name}}</span>
                        <span class="trash" @click="removeFromCart({ id: detail.bookId })"></span>
                      </td>
                      <td class="amount-row">
                        <!-- <button class="sign" @click.stop="changeAmount({ detailId: detail.id, sign: '-' })"> - </button>
                        <input type="text" class="amount" v-model="detail.amount">
                        <button class="sign" @click.stop="changeAmount({ detailId: detail.id, sign: '+' })"> + </button> -->
                        <button class="sign" @click="changeAmount({ bookId: detail.bookId, sign: '-', maxAvailable: detail.maxAvailable })"> - </button>
                        <input type="text" class="amount" :value="detail.amount">
                        <button class="sign" @click="changeAmount({ bookId: detail.bookId, sign: '+', maxAvailable: detail.maxAvailable })"> + </button>
                      </td>
                      <td class="price-row">
                        {{detail.selectedPrice}} Р
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              

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
                  <span>{{totalPrice}}</span>
                </div>
                <div class="discount">
                  <span>Со скидкой</span>
                  <!-- <span class="red">{{discountPrice}}2 149 Р</span> -->
                  <span class="red">{{discountPrice}} P</span>
                </div>
              </div>
              <div class="actions">
                <button class="btn full-red" @click="handleMakeOrder">Оформить</button>
              </div>
            </div>
          
        </div>       
      </div>
    </div>
  </transition>  
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

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
    ...mapState('Auth', [
      'profile'
    ]),
    totalPrice() {
      const mapped = this.cartItems.map(detail => detail.amount * detail.offerPrice);
      return mapped.reduce((a, b) => a + b);
    },
    discountPrice() {
      const discount = this.totalPrice / this.profile.discount
      return this.totalPrice - discount
    }
  },
  methods: {
    ...mapMutations('Cart', [
      'changeAmount',
      'removeFromCart'
    ]),
    ...mapActions('Cart', [
      'makeOrder'
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
    handleMakeOrder() {
      this.makeOrder()
      .then(() => {
        this.$toastr('success', 'Заказ был успешно оформлен', '')
        this.close()
      })
      .catch(() => {
        this.$toastr('error', 'Произошла ошибка', '')
      })
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
