<template>
  <div>
    <SearchPanel />
    <div class="content"> 
        <div class="container">
          <Filters />
          <ResultsTable />
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
  @import './../../assets/theme/buttons';  
</style>
