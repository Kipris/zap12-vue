<template>
    <!-- TODO: v-if=isMainPageDisplayed -->
    <!-- TODO: control placeholder -->
    <div class="search-input-group">
        <input type="text" class="search-input" placeholder="">

        <!-- TODO: v-if: display if button = true -->
        <button class="btn full-red search-button" @click="search">Найти</button>
    </div>
</template>

<script>

export default {
  name: 'SearchInput',
  methods: {
    search() {
      this.$router.push('/searchresults')
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
  @import './../../assets/theme/buttons';
</style>



