<template>
  <div>
    <SearchPanel @carSelected="filteredCar = $event" />
    <div class="content"> 
        <div class="container">
          <Filters @carSelected="filteredCar = $event"
                   @producerSelected="filteredProducer = $event"/>
          <ResultsTable :filteredCar="filteredCar"
                        :filteredProducer="filteredProducer"/>
        </div>    
    </div> 
    <Repair />      
  </div>
</template>

<script>
import SearchPanel from './SearchPanel';
import Filters from './Filters';
import ResultsTable from './ResultsTable';
import Repair from './../Repair'

export default {
  name: 'SearchPage',
  data() {
    return {
      filteredCar: '',
      filteredProducer: ''
    }
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
