<template>
  <div class="modal-backdrop">
    <div class="modal" :class="{ small: !historyIsNotEmpty, wide: historyIsNotEmpty }" >
        <div class="modal-content">
          <div class="modal-title">
          <div class="h2">История заказов</div>
          <span class="cross">✖</span>
        </div>

        <div class="modal-body">

          <div class="empty-history" v-if="!historyIsNotEmpty">
            <div class="content">У вас нет заказов</div>
            <div class="actions">
              <router-link :to="'/searchresults'" tag="button" class="btn black">В магазин</router-link>
            </div>
          </div> 

          <div class="history" v-if="historyIsNotEmpty">
            
            <div class="orders-list">
              <div class="order">
                <div class="heading" @click="show=!show">
                  <span class="chevron" :class="{ opened: show }"></span>
                  <span class="order-id">
                    <span class="order-icon"></span>
                    <span>22154</span>
                  </span>
                  <span class="order-status">
                    <span>Статус заказа: </span>
                    <span class="red">50% предоплаты</span>
                  </span> 
                  <span class="order-datetime">31.07.2017 12:38:48</span>
                  <span class="order-price">2 439,00 Р</span>
                </div>
                <div class="body" v-show="show">
                  <table>
                    <thead>
                      <th>Произодитель</th>
                      <th>Артикул</th>
                      <th>Наименование</th>
                      <th>Кол-во</th>
                      <th>Стоимость ед.</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>General Motors</td>
                        <td>04580083</td>
                        <td>Прокладка клапанной крышки CHEVROLET Matiz</td>
                        <td class="amount">1 шт.</td>
                        <td class="price">2 439,00 Р</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="actions">
                    <button class="btn black">Печать</button>
                    <button class="btn full-red">Оплатить</button>
                  </div>
                </div>
              </div>

              <!-- START DELETE -->
              <div class="order">
                <div class="heading">
                  <span class="chevron"></span>
                  <span class="order-id">
                    <span class="order-icon"></span>
                    <span>22154</span>
                  </span>
                  <span class="order-status">
                    <span>Статус заказа: </span>
                    <span class="red">50% предоплаты</span>
                  </span> 
                  <span class="order-datetime">31.07.2017 12:38:48</span>
                  <span class="order-price">2 439,00 Р</span>
                </div>
              </div>  
              <div class="order">
                <div class="heading">
                  <span class="chevron"></span>
                  <span class="order-id">
                    <span class="order-icon"></span>
                    <span>22154</span>
                  </span>
                  <span class="order-status">
                    <span>Статус заказа: </span>
                    <span class="red">50% предоплаты</span>
                  </span> 
                  <span class="order-datetime">31.07.2017 12:38:48</span>
                  <span class="order-price">2 439,00 Р</span>
                </div>
              </div> 
              <div class="order">
                <div class="heading">
                  <span class="chevron"></span>
                  <span class="order-id">
                    <span class="order-icon"></span>
                    <span>22154</span>
                  </span>
                  <span class="order-status">
                    <span>Статус заказа: </span>
                    <span class="red">50% предоплаты</span>
                  </span> 
                  <span class="order-datetime">31.07.2017 12:38:48</span>
                  <span class="order-price">2 439,00 Р</span>
                </div>
              </div> 
              <div class="order">
                <div class="heading">
                  <span class="chevron"></span>
                  <span class="order-id">
                    <span class="order-icon"></span>
                    <span>22154</span>
                  </span>
                  <span class="order-status">
                    <span>Статус заказа: </span>
                    <span class="red">50% предоплаты</span>
                  </span> 
                  <span class="order-datetime">31.07.2017 12:38:48</span>
                  <span class="order-price">2 439,00 Р</span>
                </div>
              </div> 
              <div class="order">
                <div class="heading">
                  <span class="chevron"></span>
                  <span class="order-id">
                    <span class="order-icon"></span>
                    <span>22154</span>
                  </span>
                  <span class="order-status">
                    <span>Статус заказа: </span>
                    <span class="red">50% предоплаты</span>
                  </span> 
                  <span class="order-datetime">31.07.2017 12:38:48</span>
                  <span class="order-price">2 439,00 Р</span>
                </div>
              </div> 
              <div class="order">
                <div class="heading">
                  <span class="chevron"></span>
                  <span class="order-id">
                    <span class="order-icon"></span>
                    <span>22154</span>
                  </span>
                  <span class="order-status">
                    <span>Статус заказа: </span>
                    <span class="red">50% предоплаты</span>
                  </span> 
                  <span class="order-datetime">31.07.2017 12:38:48</span>
                  <span class="order-price">2 439,00 Р</span>
                </div>
              </div> 
              <!-- END DELETE -->
            </div>
          </div>           
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OrderHistoryModal',
  data() {
    return {
      history: [
        { name: 'qqq' }
      ],
      // historyIsNotEmpty: false,
      historyIsNotEmpty: true,
      show: false
    }
  },
  computed: {
    getHistoryStatus() {
      if (this.history !== '') this.historyIsNotEmpty = true
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
