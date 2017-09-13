<template>
  <div class="dropdown-menu cart">
    <!-- TODO: v-if = isCartIsEmpty -->
    <span v-if="inventory.length === 0">Корзина пуста</span>
    <DetailsPreview v-if="inventory.length > 0" :details="inventory"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DetailsPreview from './DetailsPreview'

export default {
  name: 'Cart',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('Cart', [
      'cartItems'
    ]),
    inventory: {
      get() {
        return this.cartItems
      }
    }
  },
  methods: {
    ...mapActions('Cart', [
      'getInventory'
    ])
  },
  created() {
    this.getInventory()
  },
  components: {
    DetailsPreview
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
