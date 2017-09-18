<template>
  <div id="app">
    <AppHeader />
    <router-view id="content"></router-view>
    <AppFooter class="footer" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
  @import 'styles';
  // @import 'node_modules/pavilion/scss/pavilion';
</style>

<style lang="scss">
  #content {
    margin-bottom: 350px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 350px;
    z-index: -1;
}
</style>

