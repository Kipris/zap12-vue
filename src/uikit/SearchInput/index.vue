<template>
    <!-- TODO: v-if=isMainPageDisplayed -->
    <div class="search-input-group">
        <input type="text" class="search-input" placeholder="Поиск автозапчастей по номеру, по марке машины">

        <!-- TODO: v-if: display if button = true -->
        <button class="btn full-red search-button">Найти</button>
    </div>
</template>

<script>

export default {
  name: 'SearchInput',
  components: {}
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
  @import './../../assets/theme/buttons';
</style>



