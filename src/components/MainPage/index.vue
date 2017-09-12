<template>
  <div>
    <Intro />
    <Service />
    <Detail />
    <News />
    <Repair />
    <CartModal />
  </div>
</template>

<script>
import Intro from './Intro';
import Service from './Service';
import Detail from './Detail';
import News from './News';
import Repair from './../Repair';
import CartModal from './../Modals/CartModal';

export default {
  name: 'MainPage',
  components: {
    Intro,
    Service,
    Detail,
    News,
    Repair,
    CartModal
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
</style>
