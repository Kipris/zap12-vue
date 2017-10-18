<template>
  <div id="app">
    <AppHeader id="header"/>
    <router-view id="content"></router-view>
    <AppFooter id="footer"/>
    <portal-target name="map" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import Vue from 'vue'
import VueToastr from '@deveodk/vue-toastr'

Vue.use(VueToastr, {
  defaultPosition: 'toast-top-right',
  defaultType: 'info',
  defaultTimeout: 5000
})

export default {
  name: 'app',
  methods: {
    ...mapActions('Auth', [
      'getProfile',
      'loadOrdersHistory'
    ])
  },
  created() {
    this.getProfile()
    // .then(() => {})
    // .catch(() => {})
    this.loadOrdersHistory()
  },
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
  @import url('../static/toastr.css');
  #header {
    position: relative;
    z-index: 11;
  }
  @media (min-width: 992px) {
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
  }
  @media (max-width: 1024px) {
    #app {
      overflow-x: hidden;
    }
  }  
</style>

