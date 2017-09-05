<template>
    <!-- TODO: control placeholder -->
    <div class="search-input-group">
        <input type="text" class="search-input" :placeholder="placeholder" v-model="searchStr">
        <!-- TODO: v-if: display if button = true -->
        <button class="btn full-red search-button" @click="search" v-if="button">Найти</button>
    </div>
</template>

<script>

export default {
  name: 'SearchInput',
  props: ['placeholder', 'button'],
  data() {
    return {
      searchStr: ''
    }
  },
  methods: {
    search() {
      if (this.searchStr.length === 0) {
        this.$router.push({ path: 'searchresults' })
      } else {
        this.$router.push({ path: 'searchresults', query: { carModel: this.searchStr } })
      }
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



