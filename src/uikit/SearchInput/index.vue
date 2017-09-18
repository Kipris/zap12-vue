<template>
    <div class="search-input-group">
        <input type="text" class="search-input"
               :placeholder="placeholder"
               v-model="searchStr"
               @input="handleInput"
               @keyup.enter="handleInput">
        <button class="btn full-red search-button"
                @click="search"
                v-if="button">Найти</button>
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
    // search() {
    //   this.$emit('enter', this.searchStr)
    // },
    handleInput() {
      this.$emit('input', this.searchStr)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
</style>



