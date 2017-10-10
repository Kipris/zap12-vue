<template>
  <div>
    <SearchPanel @carSelected="filteredCar = $event" />
    <div class="content"> 
        <div class="container">
          <Filters @carSelected="filteredCar = $event"
                   @producerSelected="filteredProducer = $event"/>
          <router-view @detailWasSelected="handleSelect" class="table-container"
                       :details="details"
                       :showPagination="true"
                       :selectedDetail="selectedDetail"></router-view>
          <!-- <h1 v-else>Введите запрос</h1> -->
          <!-- <ResultsTable /> -->
        </div>    
    </div> 
    <Repair />      
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import SearchPanel from './SearchPanel';
import Filters from './Filters';
import ResultsTable from './ResultsTable';
import Repair from './../Repair'


export default {
  name: 'SearchPage',
  data() {
    return {
      selectedDetail: {}
    }
  },
  computed: {
    ...mapState('Cart', [
      'details'
    ])
  },
  methods: {
    ...mapActions('Cart', [
      'getDetails'
    ]),
    ...mapMutations('Cart', [
      'addToCart'
    ]),
    handleSelect(detail) {
      this.selectedDetail = detail
      this.$router.push({ path: `/searchresults/${detail.id}` })
    }
  },
  created() {
    this.getDetails()
  },
  components: {
    SearchPanel,
    Filters,
    ResultsTable,
    Repair
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion'; 
</style>
