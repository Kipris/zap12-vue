<template>
  <section class="filters">
    <div class="panel dark">
      <form>
        <div class="form-group">
          <label>Марка автомобиля</label> 
          <multiselect v-model="selectedMark" 
          :options="carOptions" 
          :multiple="true" 
          :close-on-select="false" 
          :clear-on-select="false" 
          :hide-selected="true" 
          :preserve-search="true" 
          placeholder="" 
          label="name" 
          track-by="name"
          @close="emitCar">
            <template slot="tag" scope="props">
              <span class="custom__tag">
                <span>{{ props.option.name }}</span>
                <span class="custom__remove" @click="props.remove(props.option)">✖</span>
              </span>
            </template>
          </multiselect>
        </div>
        <div class="form-group">
          <label>По производителю</label>
          <multiselect v-model="selectedProducer" 
          :options="producerOptions" 
          :multiple="true" 
          :close-on-select="false" 
          :clear-on-select="false" 
          :hide-selected="true" 
          :preserve-search="true" 
          placeholder="" 
          label="name" 
          track-by="name"
          @close="emitProducer">
            <template slot="tag" scope="props">
              <span class="custom__tag">
                <span>{{ props.option.name }}</span>
                <span class="custom__remove" @click="props.remove(props.option)">✖</span>
              </span>
            </template>
          </multiselect>
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
import { mapMutations, mapActions } from 'vuex'
import Multiselect from 'vue-multiselect'

export default {
  name: 'Filters',
  data() {
    return {
      selectedMark: '',
      carOptions: [
        { name: 'BMW' },
        { name: 'Renault' },
        { name: 'Mercedes' },
        { name: 'Jeep' },
        { name: 'Mitsubishi' },
        { name: 'Volvo' }
      ],
      selectedProducer: '',
      producerOptions: [
        { name: 'VAG' },
        { name: 'HELLA' },
      ]
    }
  },
  methods: {
    ...mapMutations('Cart', [
      'setModelFilter',
      'setProducerFilter'
    ]),
    ...mapActions('Cart', [
      'getDetails'
    ]),
    emitCar() {
      this.setModelFilter(this.selectedMark)
      this.getDetails()
    },
    emitProducer() {
      this.setProducerFilter(this.selectedProducer)
      this.getDetails()
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
</style>
<style lang="scss">
  .multiselect {
    position: relative;
    &--active {
      .multiselect__tags::after {
        transform: rotate(180deg);
      }
    }
  }
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
    top: 9px;
    right: 10px;
    transition: .3s ease-in;
  }
  .multiselect__tags-wrap {
    padding: 10px 20px 5px 10px;
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
    border-radius: 0 0 8px 8px;
    border: 1px solid rgba(46, 46, 46, 0.2);
    margin-top: -6px;
    position: absolute;
    z-index: 10;
    width: 100%;
    border-top: none;
  }
  .multiselect__content {
    list-style: none;
    padding-left: 20px;
    width: 100%;
    li {
      cursor: pointer;
      padding: 5px 0;
    }
    li:hover {
      text-decoration: underline;
    }
  }
  .custom__tag {
    color: #161616;
    padding: 2px 5px;
    border-radius: 4px;
    background-color: #EFEFEF;
    margin-right: 5px;
    display: inline-block;
    margin-bottom: 5px;
    border: 1px solid #B3B3B3;
  }
  .custom__remove {
    cursor: pointer;
    color: #B3B3B3;
    margin-left: 5px;
  }
</style>