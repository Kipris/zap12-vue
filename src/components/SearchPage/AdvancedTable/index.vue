<template>
  <div>
    <ResultsTable :details="details" />
    <AnalogTable />
  </div>
</template>

<script>
import ResultsTable from '../ResultsTable'
import AnalogTable from './AnalogTable'

export default {
  name: 'AdvancedTableContainer',
  props: {
    details: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ResultsTable,
    AnalogTable
  }
}
</script>

<style lang="scss" scoped>

</style>
