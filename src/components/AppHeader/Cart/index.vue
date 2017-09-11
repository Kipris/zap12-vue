<template>
  <div class="dropdown-menu cart">
      <!-- TODO: v-if = isCartIsEmpty -->
      <span v-if="inventory.length === 0">Корзина пуста</span>
      <DetailsPreview :details="cartItems"/>
  </div>
</template>

<script>
import axios from '@/APIMock/api'
import { mapState } from 'vuex'
import DetailsPreview from './DetailsPreview'

export default {
  name: 'Cart',
  data() {
    return {
      inventory: []
    }
  },
  computed: {
    ...mapState('Cart', [
      'cartItems'
    ])
  },
  methods: {
    loadDetails() {
      axios.get('/user')
      .then((res) => {
        this.inventory = res.data.inventory
      })
    }
  },
  created() {
    this.loadDetails()
  },
  components: {
    DetailsPreview
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
