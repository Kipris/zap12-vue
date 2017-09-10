<template>
  <section class="search-panel">
    <div class="container">
        <div class="search-panel-wrap">            
            <!-- <input type="text" class="search-input" placeholder="Поиск"> -->
            <SearchInput placeholder="Поиск"
                         :button="false"
                         @input="handleInput" />
            <div class="sort-wrap">
                <div class="sort-by">
                  <label>Сортировать по:</label>
                  <multiselect v-model="sortByValue" 
                               v-bind:class='{singleSelect: true}'
                               :options="sortByOptions" 
                               :searchable="false" 
                               :close-on-select="false" 
                               :show-labels="false">
                  </multiselect>
                </div>
                <div class="show-record">
                  <label>Показывать:</label>
                  <multiselect v-model="showRecordValue" 
                               v-bind:class='{singleSelect: true}'
                               :options="showRecordOptions" 
                               :searchable="false" 
                               :close-on-select="false" 
                               :show-labels="false">
                  </multiselect>
                </div>
            </div>
        </div>                
    </div>
  </section>
</template>

<script>
import SearchInput from '@/uikit/SearchInput'
import Multiselect from 'vue-multiselect'

export default {
  name: 'SearchPanel',
  methods: {
    handleInput($event) {
      this.$emit('carSelected', $event)
    }
  },
  components: {
    SearchInput,
    Multiselect
  },
  data() {
    return {
      sortByValue: 'Наличию',
      sortByOptions: ['Наличию', 'Цене'],
      showRecordValue: '24',
      showRecordOptions: ['24', '48']
    }
  }
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
</style>

<style lang="scss">
  .sort-by {
    .singleSelect {
      width: 126px;
      margin-right: 20px;
    }
  }
  .show-record {
    .singleSelect {
      width: 66px;
    }
  }
  .singleSelect {
    .multiselect__tags::after {
      margin-top: -7px;
    }
    .multiselect__element {
      font-size: 1.3rem;
    }
  }
  .multiselect__single {
    font-size: 1.3rem;
    padding: 10px;
    position: absolute;
    top: 50%;
    margin-top: -19px;
    width: inherit;
  }
</style>
