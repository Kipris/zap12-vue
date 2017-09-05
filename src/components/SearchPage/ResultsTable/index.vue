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
        <tr v-for="detail in carDetails">
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
            <div>
              <label class="chip chip-green">{{detail.storageAmount}}</label>
              <label class="chip chip-blue">{{detail.deliveryAamount}}</label>
              <label class="chip chip-grey">{{detail.nonAvailableAamount}}</label>
            </div>            
          </td>
          <td class="price">
            <div>{{detail.storagePrice}} Р</div>
            <div>{{detail.deliveryPrice}} Р</div>
            <div>{{detail.nonAvailablePrice}} Р</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { find } from '@/APIMock/details'
import axios from 'axios'

export default {
  name: 'ResultsTable',
  props: {
    filteredCar: {
      type: [String, Array]
    },
    filteredProducer: {
      type: [String, Array]
    }
  },
  data() {
    return {
      carDetails: []
    }
  },
  methods: {
    searchDetail(carModel, detailProducer) {
      const params = {
        _sort: 'storageAmount',
        _order: 'desc',
        _limit: 24
      }
      if (carModel) {
        params.carModel = carModel
      }
      if (detailProducer) {
        params.detailProducer = detailProducer
      }
      axios.get('http://localhost:3000/details', {
        params
      })
      .then((res) => {
        this.carDetails = res.data
      })
      .catch(err => console.log(err))
    }
  },
  watch: {
    filteredCar(val) {
      this.searchDetail(val, this.filteredProducer)
    },
    filteredProducer(val) {
      this.searchDetail(this.filteredCar, val)
    }
  },
  created() {
    // const carModel = Object.keys(this.$route.query)[0]
    const carModel = Object.values(this.$route.query)[0]
    console.log(this.$route.query, carModel)
    this.searchDetail(carModel)
    // const result = find(['carModel', 'detailProducer'], ['BMW', 'HELLA', ''])
    // console.log('result', result)
    // this.carDetails = result
  }
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
</style>