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
              <label class="chip chip-green">{{detail.detailsInfo.storage.amount}}</label>
              <label class="chip chip-blue">{{detail.detailsInfo.delivery.amount}}</label>
              <label class="chip chip-grey">{{detail.detailsInfo.nonAvailable.amount}}</label>
            </div>            
          </td>
          <td class="price">
            <div>{{detail.detailsInfo.storage.price}} Р</div>
            <div>{{detail.detailsInfo.delivery.price}} Р</div>
            <div>{{detail.detailsInfo.nonAvailable.price}} Р</div>
          </td>
        </tr>
        <!-- <tr>
          <td class="producer">
            <div>КМК Glass/Бор</div>
          </td>
          <td class="vendor">
            <div>
              st.F.audi a6.un97
            </div>
          </td>
          <td class="naming">
            <div>Датчик включения стоп-сигнала AUDI A3 , A4 , A6/S6 , Allroad , Q7 , R8 , SEAT Altea , Arosa , Exeo , Leon , Toledo III , SKODA Octavia , Superb , VOLKSWAGEN Caddy III , Fox , Golf IV , Golf V , Golf VI , Jetta , Lupo , Passat , Phaeton , Polo , Spacefox ,</div>
          </td>  
          <td class="availability">
            <div>
              <label class="chip chip-green">1</label>
              <label class="chip chip-blue">1</label>
              <label class="chip chip-grey">5</label>
            </div>            
          </td>
          <td class="price">
            <div>2 750 Р</div>
            <div>2 750 Р</div>
            <div>2 750 Р</div>
          </td>
        </tr>
        <tr>
          <td class="producer">
            <div>КМК Glass/Бор</div>
          </td>
          <td class="vendor">
            <div>
              st.F.audi a6.un97
            </div>
          </td>
          <td class="naming">
            <div>Датчик включения стоп-сигнала AUDI A3 , A4 , A6/S6 , Allroad , Q7 , R8 , SEAT Altea , Arosa , Exeo , Leon , Toledo III , SKODA Octavia , Superb , VOLKSWAGEN Caddy III , Fox , Golf IV , Golf V , Golf VI , Jetta , Lupo , Passat , Phaeton , Polo , Spacefox ,</div>
          </td>  
          <td class="availability">
            <div>
              <label class="chip chip-green">1</label>
              <label class="chip chip-blue">1</label>
              <label class="chip chip-grey">5</label>
            </div>            
          </td>
          <td class="price">
            <div>2 750 Р</div>
            <div>2 750 Р</div>
            <div>2 750 Р</div>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import { find } from '@/APIMock/details'

export default {
  name: 'ResultsTable',
  data() {
    return {
      carDetails: []
    }
  },
  created() {
    const field = Object.keys(this.$route.query)[0]
    const value = Object.values(this.$route.query)[0]
    const result = find(field, value)
    this.carDetails = result
  }
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
</style>