<template>
    <section class="details">
      <div class="container">
        <div class="h1">У нас вы можете приобрести следующие запчасти:</div>  
        <div class="details-wrap">
            <div class="details-item panel body-details">
                <h3>Кузовные детали</h3>
                <!-- <Arrow /> -->
                <button class="btn full-red">Смотреть</button>
            </div>
            <div class="details-item panel chassis">
                <h3>Ходовую часть автомобиля</h3>
                <!-- <Arrow /> -->
                <button class="btn full-red">Смотреть</button>
            </div> 
        </div>
        <div class="details-wrap">
            <div class="details-item panel optics">
                <h3>Оптика</h3>
                <!-- <Arrow /> -->
                <button class="btn full-red">Cмотреть</button>
            </div>
            <div class="details-item panel consumables">
                <h3>Расходные материалы</h3>
                <!-- <Arrow /> -->
                <button class="btn full-red">Смотреть</button>
            </div>
            <div class="details-item panel care">
                <h3>Средства по уходу</h3>
                <!-- <Arrow /> -->
                <button class="btn full-red">Смотреть</button>
            </div>   
        </div>
      </div>
    </section>
</template>

<script>
import Arrow from '@/uikit/Arrow'

export default {
  name: 'Detail',
  components: {
    Arrow
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
  @import './../../../assets/theme/buttons';
</style>
