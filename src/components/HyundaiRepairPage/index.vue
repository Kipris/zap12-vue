<template>
  <section class="hyundai-repair">
    <div class="container">
      <h1>Автосервис / авторазборка Хендай Портер</h1>
      <small>В наличии б/у и новые запчасти:</small>
      <div class="panel-wrap">
        <div class="panel light">
          <div class="list-wrap">
            <ul class="list">
              <li><span></span>ТНВД</li>
              <li><span></span>КПП</li>
              <li><span></span>Двигатели</li>
              <li><span></span>Мосты</li>
              <li><span></span>Рессоры</li>
              <li><span></span>Кабины</li>
              <li><span></span>Будки</li>
              <li><span></span>Электрика</li>
              <li><span></span>Стекла</li>
              <li><span></span>Оптика</li>
              <li><span></span>Рамы с документами</li>
            </ul>
          </div>
          <div class="map-wrap">
            <div class="h1">Схема проезда</div>
            <button class="btn full-red" @click="showMap = true">Смотреть</button>
            <gmap-map
              :center="{lat:55.8495078, lng:37.6172781}"
              :zoom="15"
              map-type-id="terrain">
              <gmap-marker :position="{lat:55.8495078, lng:37.6172781}"></gmap-marker>
            </gmap-map>
          </div>
        </div>  
      </div>
    </div>
    <portal to="map" v-if="showMap">
      <MapModal
      @close="showMap = false"
    />
    </portal>
  </section>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps'
import MapModal from '../MapModal'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places'
  }
})

export default {
  name: 'HyundaiRepairPage',
  data() {
    return {
      showMap: false
    }
  },
  components: {
    MapModal
  }
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
</style>

<style lang="scss">
  .gmnoprint,
  .gm-style-cc,
  .gm-fullscreen-control {
    display: none;
  }
</style>