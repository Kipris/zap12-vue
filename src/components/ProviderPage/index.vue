<template>
    <div class="provider">
      <Intro />
      <Content />
      <Repair />
    </div>
</template>

<script>
import Intro from './Intro'
import Content from './Content'
import Repair from './../Repair'

export default {
  name: 'ProviderPage',
  components: {
    Intro,
    Content,
    Repair
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
</style>