<template>
  <div class="dropdown-menu cart">
    <!-- TODO: v-if = isCartIsEmpty -->
    <span v-if="inventory.length === 0">Корзина пуста</span>
    <DetailsPreview
       v-if="inventory.length > 0"
      :details="inventory"
      @close="handleClose"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    handleClose() {
      this.$emit('close')
    }
  },
  components: {
    DetailsPreview
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
