<template>
    <section class="repair">
      <div class="container">
         <div class="h1">Ремонт и обслуживание Hyundai Porter</div>
         <p>Разборка и продажа запчастей</p>
         <router-link :to="'/hyundairepair'" tag="button" class="btn full-red">Подробнее</router-link>  
      </div>
    </section>
</template>

<script>

export default {
  name: 'Repair',
  components: {}
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
  @import './../../assets/theme/buttons';
</style>