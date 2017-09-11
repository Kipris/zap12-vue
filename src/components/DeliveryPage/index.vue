<template>
    <div>
      <Intro />
      <DeliveryContent />
      <Repair />
    </div>
</template>

<script>
import Intro from './Intro'
import DeliveryContent from './DeliveryContent'
import Repair from './../Repair'

export default {
  name: 'DeliveryPage',
  components: {
    Intro,
    DeliveryContent,
    Repair
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
</style>