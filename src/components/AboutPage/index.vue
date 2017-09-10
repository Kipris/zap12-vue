<template>
  <div>
    <Intro />
    <AboutContent />
    <Repair />
  </div>
</template>

<script>
import Intro from './Intro'
import AboutContent from './AboutContent'
import Repair from './../Repair'

export default {
  name: 'AboutPage',
  components: {
    Repair,
    Intro,
    AboutContent
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion'; 
</style>
