<template>
  <div>
    <SearchPanel />
    <div class="content"> 
        <div class="container">
          <Filters />
          <ResultsTable />
        </div>    
    </div>    
  </div>
</template>

<script>
import SearchPanel from './SearchPanel';
import Filters from './Filters';
import ResultsTable from './ResultsTable'

export default {
  name: 'SearchPage',
  components: {
    SearchPanel,
    Filters,
    ResultsTable
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
  @import './../../assets/theme/buttons';  
</style>
