<template>
  <div class="result-table-wrap">
    <div class="table-title">
      <h1>Поиск по запросу</h1>
      <div class="h1" v-if="false">Запрошенный артикул</div>
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
        <TableItem v-for="detail in detailsHandler"
                   :detail="detail"
                   :buy="buy"
                   @detailWasSelected="handleDetailSelect($event)"
                   v-if="detail.offers.length > 0" />
      </tbody>
    </table>
    <div class="details-pagination" v-if="pagesCount > 1 && showPagination">
      <button class="btn gray prev" @click="changePage('prev')" :disabled="currentPage === 1">Предыдущая</button>
      <div class="pages">
          <span>Страниц:</span>
          <span class="red">{{currentPage}} из {{pagesCount}}</span>
      </div>
      <button class="btn gray next active" @click="changePage('next')" :disabled="currentPage === pagesCount">Следующая</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import TableItem from './TableItem'

export default {
  name: 'ResultsTable',
  props: {
    details: {
      type: Array,
      defaul: () => []
    },
    buy: {
      type: Boolean,
      default: false
    },
    showPagination: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      carDetails: []
    }
  },
  computed: {
    ...mapState('Cart', {
      detailsFromStore: 'details',
      search: 'search',
      totalFound: 'totalFound'
    }),
    ...mapGetters('Cart', [
      'pagesCount',
      'currentPage',
    ]),
    detailsHandler() {
      if (this.details) {
        return this.details
      }
      return this.detailsFromStore
    }
  },
  methods: {
    ...mapActions('Cart', [
      'changePage'
    ]),
    handleDetailSelect(detail) {
      this.$emit('detailWasSelected', detail)
    }
  },
  components: {
    TableItem
  }
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
</style>