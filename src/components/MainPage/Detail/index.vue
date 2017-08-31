<template>
    <section class="details">
      <div class="container">
        <div class="h1">У нас вы можете приобрести следующие запчасти:</div>  
        <div class="details-wrap">
            <div class="details-item panel body-details">
                <h4>Кузовные детали</h4>
                <div class="arrow-wrap"> <span class="arrow back"></span> </div>
                <button class="btn full-red">Смотреть</button>
            </div>
            <div class="details-item panel chassis">
                <h4>Ходовую часть автомобиля</h4>
                <div class="arrow-wrap"> <span class="arrow back"></span> </div>
                <button class="btn full-red">Смотреть</button>
            </div> 
        </div>
        <div class="details-wrap">
            <div class="details-item panel optics">
                <h4>Оптика</h4>
                <div class="arrow-wrap"> <span class="arrow back"></span> </div>
                <button class="btn full-red">Cмотреть</button>
            </div>
            <div class="details-item panel consumables">
                <h4>Расходные материалы</h4>
                <div class="arrow-wrap"> <span class="arrow back"></span> </div>
                <button class="btn full-red">Смотреть</button>
            </div>
            <div class="details-item panel care">
                <h4>Средства по уходу</h4>
                <div class="arrow-wrap"> <span class="arrow back"></span> </div>
                <button class="btn full-red">Смотреть</button>
            </div>   
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'Detail',
  components: {}
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
  @import './../../../assets/theme/buttons';
</style>
