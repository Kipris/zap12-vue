<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  }
};
</script>

<style>

</style>
