<template>
  <div id="app">
    <AppHeader />
    <router-view id="content"></router-view>
    <AppFooter id="footer"/>
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
    margin-bottom: 315px;
    z-index: 10;
    position: relative;
  }
  #footer {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 315px;
    bottom: 0;
    left: 0;
    z-index: 9;
  }
  @media (max-width: 991px) {
    #content {
      margin-bottom: 591px;
    }
    #footer {
      height: 591px;
    }
  }
  @media (max-width: 540px) {
    #content {
      margin-bottom: 942px;
    }
    #footer {
      height: 942px;
    }
  }
</style>

