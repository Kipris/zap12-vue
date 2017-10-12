<template>
  <transition name="fade">
    <div class="modal-backdrop">
      <div class="modal">
        <span class="cross" @click="close">✖</span>
        <gmap-map
          :center="{lat:55.8495078, lng:37.6172781}"
          :zoom="15"
          style="width: 100%; height: 100%"
          map-type-id="terrain">
          <gmap-marker :position="{lat:55.8495078, lng:37.6172781}"></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places'
  }
})

export default {
  name: 'MapModal',
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
    