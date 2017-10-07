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

// Vue.use(VueSticky.install)

export default {
  name: 'NewsPage',
  components: {
    Intro,
    NewsContainer,
    SearchPanel,
    Repair
  },
  data() {
    return {
      stickyOptions: {
        marginTop: 20,
        forName: 0,
        className: 'stuck'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
</style>
