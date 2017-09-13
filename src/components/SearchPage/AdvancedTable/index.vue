<template>
  <div>
    <ResultsTable :details="[detail]"
                  :buy="true" />
    <AnalogTable :details="analogDetails"
                 :buy="true"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ResultsTable from '../ResultsTable'
import AnalogTable from './AnalogTable'

export default {
  name: 'AdvancedTableContainer',
  props: {
    details: {
      type: Array,
      default: () => []
    },
    selectedDetail: {
      type: Object,
      default: {}
    }
  },
  computed: {
    ...mapState('Cart', [
      'analogDetails',
      'reloadedSelectedDetail'
    ]),
    detail() {
      if (Object.keys(this.selectedDetail).length !== 0) {
        return this.selectedDetail
      }
      return this.reloadedSelectedDetail
    },
    trimmedAnalogs() {
      return this.details.splice(0, 4)
    }
  },
  methods: {
    ...mapActions('Cart', [
      'getAnalogs',
      'getDetail'
    ])
  },
  created() {
    this.getDetail(this.$route.params.id)
    // TODO for reloading on /searchresults/:id route
    this.getAnalogs(this.detail.analogIds)
  },
  components: {
    ResultsTable,
    AnalogTable
  }
}
</script>

<style lang="scss" scoped>

</style>
