<template>
  <div class="dropdown-menu cart">
      <!-- TODO: v-if = isCartIsEmpty -->
      <!-- <span v-if="inventory.length === 0">Корзина пуста</span> -->
      <span v-if="false">Корзина пуста</span>
      <DetailsPreview :details="list"/>
  </div>
</template>

<script>
import axios from '@/APIMock/api'
import CartBus from '../../../eventBus/CartBus'
import DetailsPreview from './DetailsPreview'

export default {
  name: 'Cart',
  data() {
    return {
      inventory: []
    }
  },
  computed: {
    list() {
      return CartBus.details
    }
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
    CartBus.$on('detailAdded', (detail) => {
      this.inventory.push(detail)
    })
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
