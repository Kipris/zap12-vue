<template>
    <div  class="order">
      <div class="heading" @click="show= !show">
        <span class="chevron" :class="{ opened: show }"></span>
        <span class="order-id">
          <span class="order-icon"></span>
          <span>{{order.id}}</span>
        </span>
        <span class="order-status">
          <span>Статус заказа: </span>
          <span class="red">{{order.payStatus}}</span>
        </span> 
        <!-- <span class="order-datetime">31.07.2017 12:38:48</span> -->
        <span class="order-datetime">{{order.createdAt}}</span>
        <span class="order-price">{{order.totalPrice}} Р</span>
      </div>
      <b-collapse id="collapse1" v-model="show" class="accordion mt-2">
        <div class="table-wrap" id="scrollbar">
          <table>
            <thead>
              <th>Произодитель</th>
              <th>Артикул</th>
              <th>Наименование</th>
              <th>Кол-во</th>
              <th>Стоимость ед.</th>
            </thead>
            <tbody>
              <tr v-for="detail in order.items">
                <td>{{detail.producer}}</td>
                <td>{{detail.number}}</td>
                <td>{{detail.name}}</td>
                <td class="amount">{{detail.unitAmount}}</td>
                <td class="price">{{detail.unitPrice}} Р</td>
              </tr>
            </tbody>
          </table>
        </div>                  
        <div class="actions">
          <button class="btn black">Печать</button>
          <button class="btn full-red">Оплатить</button>
        </div>
      </b-collapse>
    </div>
</template>

<script>
import Vue from 'vue'
import { bCollapse } from 'bootstrap-vue/lib/components'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

export default {
  name: 'OrderItem',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  components: {
    bCollapse
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles'
</style>
