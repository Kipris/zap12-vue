<template>
  <section class="hyundai-repair">
    <div class="container"></div>
    <h1>Автосервис / авторазборка Хендай Портер</h1>
    <small>В наличии б/у и новые запчасти:</small>
    <div class="panel light">
      <div class="list-wrap">
        <ul class="list">
          <li>ТНВД</li>
          <li>КПП</li>
          <li>Двигатели</li>
          <li>Мосты</li>
          <li>Рессоры</li>
          <li>Кабины</li>
          <li>Будки</li>
          <li>Электрика</li>
          <li>Стекла</li>
          <li>Оптика</li>
          <li>Рамы с документами</li>
        </ul>
      </div>
      <div class="map-wrap">
        <div class="h1">Схема проезда</div>
        <button class="btn full-red">Смотреть</button>
      </div>
    </div>      
  </section>
</template>

<script>

export default {
  name: 'HyundaiRepair'
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
  @import './../../../assets/theme/buttons';
</style>