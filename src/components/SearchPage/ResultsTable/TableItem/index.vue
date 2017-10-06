<template>
  <tr @click="handleDetailSelect(detail)">
    <td class="producer">
      <div>{{detail.producer}}</div>
    </td>
    <td class="vendor">
      <div>
        {{detail.vendor}}
      </div>
    </td>
    <td class="naming">
      <div>{{detail.name}}</div>
    </td>  
    <td class="availability">
      <div v-for="(offer, i) in detail.offers">
        <label class="chip" 
               :class="[{'chip-green': i === 0 },
                       {'chip-blue': i === 1 },
                       {'chip-grey': i === 2 }]" >{{offer.count}}</label>
      </div>
      <!-- <div v-if="detail.deliveryAmount">
        <label class="chip chip-blue">{{detail.offers[1].count}}</label>
      </div>
      <div v-if="detail.nonAvailableAmount">
        <label class="chip chip-grey">{{detail.offers[2].count}}</label>
      </div>         -->
    </td>
    <td class="price">
      <div v-for="offer in detail.offers">
        <span>{{offer.price}} Р</span>
        <span class="buy-icon" v-if="buy" @click="addToCart({ detail: detail, bookId: offer.bookId, offerPrice: offer.price })"></span> 
      </div>
      <!-- <div v-if="detail.offers[1].isAvailable">
        <span>{{detail.offers[1].price}} Р</span>
        <span class="buy-icon" v-if="buy" @click="addToCart({ detail: detail, selectedPrice: detail.deliveryPrice })"></span> 
      </div>
      <div v-if="detail.offers[2].isAvailable">
        <span>{{detail.offers[2].price}} Р</span>
        <span class="buy-icon" v-if="false" @click="addToCart(detail)"></span> 
        <span class="buy-icon" v-if="false" @click="addToCart(detail)"></span> 
      </div> -->
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
