<template>
  <div>
    <Intro />
    <Service />
    <Detail />
    <News />
    <Repair />
  </div>
</template>

<script>
import Intro from './Intro';
import Service from './Service';
import Detail from './Detail';
import News from './News';
import Repair from './../Repair';

export default {
  name: 'MainPage',
  components: {
    Intro,
    Service,
    Detail,
    News,
    Repair
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
  @import './../../assets/theme/buttons';
</style>
