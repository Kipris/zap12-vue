<template>
  <div class="result-table-wrap">
    <div class="table-title">
      <h1>Поиск по запросу</h1>
      <div class="chips-wrap">
        <label class="chip chip-grey">Нет в наличии</label>
        <label class="chip chip-green">На складе</label>
        <label class="chip chip-blue">Доставка</label>
      </div> 
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="producer">Производитель</th>
          <th class="vendor">Артикул</th>
          <th class="naming">Наименование</th>
          <th class="availability">Нал.</th>
          <th class="price">Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="detail in details"
            @click="handleDetailSelect(detail)">
          <td class="producer">
            <div>{{detail.detailProducer}}</div>
          </td>
          <td class="vendor">
            <div>
              {{detail.vendor}}
            </div>
          </td>
          <td class="naming">
            <div>{{detail.detailName}}</div>
          </td>  
          <td class="availability">
            <div v-if="detail.storageAmount">
              <label class="chip chip-green">{{detail.storageAmount}}</label>
            </div>
            <div v-if="detail.deliveryAmount">
              <label class="chip chip-blue">{{detail.deliveryAmount}}</label>
            </div>
            <div v-if="detail.nonAvailableAmount">
              <label class="chip chip-grey">{{detail.nonAvailableAmount}}</label>
            </div>        
          </td>
          <td class="price">
            <div v-if="detail.storageAmount">
              <span>{{detail.storagePrice}} Р</span>
              <span class="buy-icon" v-if="false" @click="addToCart(detail)"></span> 
            </div>
            <div v-if="detail.deliveryAmount">
              <span>{{detail.deliveryPrice}} Р</span>
              <span class="buy-icon" v-if="false" @click="addToCart(detail)"></span> 
            </div>
            <div v-if="detail.nonAvailableAmount">
              <span>{{detail.nonAvailablePrice}} Р</span>
              <span class="buy-icon" v-if="false" @click="addToCart(detail)"></span> 
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


export default {
  name: 'ResultsTable',
  props: {
    details: {
      type: Array,
      defaul: () => []
    }
  },
  data() {
    return {
      carDetails: []
    }
  },
  methods: {
    handleDetailSelect(detail) {
      this.$emit('detailWasSelected', detail)
    }
  }
  // },
  // created() {
  //   this.getDetails()
  // }
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
</style>