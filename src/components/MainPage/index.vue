<template>
  <div>
    <Intro />
    <Service />
    <Details />
    <News />
    <Repair />
  </div>
</template>

<script>
import Arrow from '@/uikit/Arrow';
import Intro from './Intro';
import Service from './Service';
import Details from './Details';
import News from './News';
import Repair from './Repair';

export default {
  name: 'MainPage',
  components: {
    Arrow,
    Intro,
    Service,
    Details,
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
