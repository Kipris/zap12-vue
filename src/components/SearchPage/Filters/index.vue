<template>
  <section class="filters">
    <div class="panel dark">
      <form>
        <div class="form-group">
          <label>Марка автомобиля</label> 
          <multiselect v-model="selectedMark"
                      placeholder=""
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
                      placeholder=""
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
<style lang="scss">
  .multiselect__input {
    width: 100% !important;
    height: 40px;
    border-radius: 8px;
    border: 1px solid rgba(46,46,46,.2);
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .multiselect__tags {
    position: relative;
    min-height: 40px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid rgba(46,46,46,.2);
  }
  .multiselect__tags::after {
    content: url('../../../assets/img/red_arrow.svg');
    position: absolute;
    top: 50%;
    margin-top: -9.5px;
    right: 10px;
  }
  .multiselect__tags-wrap {
    padding: 10px 25px 10px 15px;
  }
  .multiselect__tag {
    cursor: pointer;
    position: relative;
    z-index: 10;
  }
  .multiselect__tag:hover {
    text-decoration: underline;
  }
  .multiselect__tag,
  .multiselect__content {
    color: rgba(46,46,46,1);
  }
  .multiselect__content-wrapper {
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid rgba(46,46,46,.2);
    margin-top: 5px;
  }
  .multiselect__content {
    list-style: none;
    padding-left: 20px;
    li {
      cursor: pointer;
      padding: 5px 0;
    }
    li:hover {
      text-decoration: underline;
    }
  }
</style>