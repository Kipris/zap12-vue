<template>
  <section class="filters">
    <div class="panel dark">
      <form>
        <div class="form-group">
          <label>Марка автомобиля</label> 
          <multiselect v-model="selectedMark"
                      :multiple="true"
                      :options="carOptions"
                      @close="emitCar"></multiselect>
          <!-- <select>
            <option value="0" selected>BMW</option>
          </select> -->
        </div>
        <div class="form-group">
          <label>По производителю</label> 
          <multiselect v-model="selectedProducer"
                      :multiple="true"
                      :options="producerOptions"
                      @close="emitProducer"></multiselect>
        </div>
        <div class="form-group checkbox-group">
          <label>Учитывать аналоги</label> 
          <input class="tgl tgl-red" id="cb2" type="checkbox">
          <label class="tgl-btn" for="cb2"></label>
        </div>
      </form>
    </div>      
  </section>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'Filters',
  data() {
    return {
      selectedMark: '',
      selectedProducer: '',
      carOptions: ['BMW', 'Renault', 'Mercedes', 'Jeep'],
      producerOptions: ['VAG', 'HELLA']
    }
  },
  methods: {
    emitCar() {
      this.$emit('carSelected', this.selectedMark)
    },
    emitProducer() {
      this.$emit('producerSelected', this.selectedProducer)
    }
  },
  components: {
    Multiselect
  }
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
  @import './../../../assets/theme/buttons';
</style>