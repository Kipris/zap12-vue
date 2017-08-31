<template>
  <section class="search-panel">
    <div class="container">
        <div class="search-panel-wrap">            
            <!-- <input type="text" class="search-input" placeholder="Поиск"> -->
            <SearchInput />
            <div class="sort-wrap">
                <label class="sort-by">Сортировать по:</label>
                <select class="sort-by">
                    <option value="0" selected>Наличию</option>
                </select>
                <label class="show-record">Показывать:</label>
                <select class="show-record">
                    <option value="0" selected>24</option>
                </select>
            </div>
        </div>                
    </div>
  </section>
</template>

<script>
import SearchInput from '@/uikit/SearchInput'

export default {
  name: 'SearchPanel',
  components: {
    SearchInput
  }
}
</script>


<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
  @import './../../../assets/theme/buttons';
</style>