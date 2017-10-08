<template>
  <div class="modal-backdrop">
    <div class="modal" :class="{ small: ordersHistory.length === 0, wide: ordersHistory.length > 0 }" >
        <div class="modal-content" id="scrollbar">
          <div class="modal-title">
          <div class="h2">История заказов</div>
          <span class="cross">✖</span>
        </div>

        <div class="modal-body">

          <div class="empty-history" v-if="ordersHistory.length === 0">
            <div class="content">У вас нет заказов</div>
            <div class="actions">
              <router-link :to="'/searchresults'" tag="button" class="btn black">В магазин</router-link>
            </div>
          </div> 

          <div class="history" v-if="ordersHistory.length > 0">
            
            <div class="orders-list">
              <OrderItem 
                v-for="(order, i) in ordersHistory"
                :order="order"
                :key="i"
                />
            </div>
          </div>           
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrderItem from './OrderItem'

export default {
  name: 'OrderHistoryModal',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('Auth', [
      'ordersHistory'
    ])
  },
  methods: {},
  components: {
    OrderItem
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
