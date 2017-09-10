<template>
  <div>
    <Intro />
    <section class="content">
      <div class="container">
        <NewsContainer />
        <SearchPanel />
      </div>
    </section> 
    <Repair />
  </div>
</template>

<script>
import Intro from './Intro'
import NewsContainer from './NewsContainer'
import SearchPanel from './SearchPanel'
import Repair from './../Repair'

export default {
  name: 'NewsPage',
  components: {
    Intro,
    NewsContainer,
    SearchPanel,
    Repair
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
</style>
