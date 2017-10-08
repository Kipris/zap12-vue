<template>
    <div class="intro">
      <div class="container">
        <h1>Автозапчасти для иномарок</h1>
        <small class="white">
            Более 20000 оригинальных деталей и запчастей для иномарок, расходных материалов и средств по уходу за автомобилем
        </small>
        <!-- TODO: search input: button = true -->
        <SearchInput placeholder="Поиск автозапчастей по номеру, по марке машины"
                     @enter="handleInput"
                     :button="true" />
      </div>
    </div>
</template>

<script>

import { mapActions, mapMutations } from 'vuex'
import SearchInput from '@/uikit/SearchInput'
import { debounce } from 'lodash'

export default {
  name: 'Intro',
  components: {
    SearchInput
  },
  methods: {
    ...mapActions('Cart', [
      'getDetails'
    ]),
    ...mapMutations('Cart', [
      'setModelFilter',
      'setSmartString'
    ]),
    // search($event) {
    //   this.setModelFilter($event)
    //   const debounced = debounce(this.getDetails, 1000)
    //   debounced()
    //   this.$router.push({ path: 'searchresults' })
    // },
    handleInput: debounce(function ($event) {
      this.setSmartString($event)
      this.getDetails()
      this.$router.push('/searchresults')
    }, 1000),
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
</style>
