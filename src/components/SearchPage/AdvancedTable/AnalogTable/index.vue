<template>
  <div>
    <h1>АНАЛОГИЧНЫЕ ТОВАРЫ</h1>
    <div class="result-table-wrap">
      <table class="table">
        <tbody>
          <TableItem v-for="detail in details"
                    :detail="detail"
                    :buy="true"
                    @detailWasSelect="handleDetailSelect($event)" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import TableItem from '../../ResultsTable/TableItem'

export default {
  name: 'AnalogTable',
  props: {
    details: {
      type: Array,
      default: () => []
    },
    buy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleDetailSelect(detail) {
      this.$emit('detailWasSelected', detail)
    }
  },
  components: {
    TableItem
  }
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../../node_modules/pavilion/scss/pavilion';
</style>