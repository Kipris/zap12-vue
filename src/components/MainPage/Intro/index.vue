<template>
    <div class="intro">
      <div class="container">
        <h1>Автозапчасти для иномарок</h1>
        <small class="white">
            Более 20000 оригинальных деталей и запчастей для иномарок, расходных материалов и средств по уходу за автомобилем
        </small>
        <!-- TODO: search input: button = true -->
        <SearchInput placeholder="Поиск автозапчастей по номеру, по марке машины"
                     @enter="search"
                     :button="true" />
      </div>
    </div>
</template>

<script>

import SearchInput from '@/uikit/SearchInput'

export default {
  name: 'Intro',
  components: {
    SearchInput
  },
  methods: {
    search($event) {
      if ($event.length === 0) {
        this.$router.push({ path: 'searchresults' })
      } else {
        this.$router.push({ path: 'searchresults', query: { carModel: $event } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
  @import './../../../assets/theme/buttons';
</style>
