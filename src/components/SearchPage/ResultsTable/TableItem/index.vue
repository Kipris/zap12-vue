<template>
  <tr @click="handleDetailSelect(detail)">
    <td class="producer">
      <div>{{detail.detailProducer}}</div>
    </td>
    <td class="vendor">
      <div>
        {{detail.vendor}}
      </div>
    </td>
    <td class="naming">
      <div>{{detail.detailName}}</div>
    </td>  
    <td class="availability">
      <div v-if="detail.storageAmount">
        <label class="chip chip-green">{{detail.storageAmount}}</label>
      </div>
      <div v-if="detail.deliveryAmount">
        <label class="chip chip-blue">{{detail.deliveryAmount}}</label>
      </div>
      <div v-if="detail.nonAvailableAmount">
        <label class="chip chip-grey">{{detail.nonAvailableAmount}}</label>
      </div>        
    </td>
    <td class="price">
      <div v-if="detail.storageAmount">
        <span>{{detail.storagePrice}} Р</span>
        <span class="buy-icon" v-if="buy" @click="addToCart({ detail: detail, selectedPrice: detail.storagePrice })"></span> 
      </div>
      <div v-if="detail.deliveryAmount">
        <span>{{detail.deliveryPrice}} Р</span>
        <span class="buy-icon" v-if="buy" @click="addToCart({ detail: detail, selectedPrice: detail.deliveryPrice })"></span> 
      </div>
      <div v-if="detail.nonAvailableAmount">
        <span>{{detail.nonAvailablePrice}} Р</span>
        <span class="buy-icon" v-if="false" @click="addToCart(detail)"></span> 
      </div>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TableItem',
  props: {
    detail: {
      type: Object
    },
    buy: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions('Cart', [
      'addToCart'
    ]),
    handleDetailSelect(detail) {
      this.$emit('detailWasSelected', detail)
    },
  }
}
</script>

<style scoped lang="scss">
  @import 'styles';
</style>
