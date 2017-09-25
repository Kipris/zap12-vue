<template>
  <div class="search-panel">
    <div class="panel dark">
      <SearchInput placeholder="Поиск"
                      v-bind:class="{ inputWrap: true }" 
                      :button="false" />
      <div class="categories-wrap">
          <div class="category">
              <p>Архив новостей</p>
              <nav>
                  <a href="">Июнь 2017</a>
                  <a href="">Май 2017</a>
                  <a href="">Апрель 2017</a>
                  <a href="">Март 2017</a>
                  <a href="">Февраль 2017</a>
                  <a href="">Январь 2017</a>
              </nav>
          </div>
          <div class="category">
              <p>Категория</p>
              <nav>
                  <a href="">Автозапчасти</a>
                  <a href="">Новости компании</a>
                  <a href="">Детали на Porter</a>
              </nav>
          </div>
          <div class="category">
              <p>Теги</p>
              <nav class="tags">
                  <a href="">#двигатель</a>
                  <a href="">#масло</a>
                  <a href="">#детали</a>
                  <a href="">#запчасти</a>
              </nav> 
          </div>
      </div>
    </div>
  </div>
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
</style>

<style lang="scss">
  .inputWrap {
    margin-bottom: 24px;
    &::before {
      margin-top: -13px !important;
    }
    input.search-input {
      height: 40px !important;
      padding: 8px 16px 8px 45px !important;
    }      
  } 
</style>


