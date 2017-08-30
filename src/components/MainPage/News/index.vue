<template>
    <section class="news">
      <div class="container">           
        <div class="h1">Последние новости</div>
        <!-- TODO: CAROUSEL -->
        <div class="news-wrap carousel">
            <Arrow class="prev"/> 
            <div class="news-block panel">
                <div class="news-title">
                    <h5>Запчасти для BMW</h5>
                    <span>07.03.2017</span>                        
                </div>
                <p>В жизни бывают такие ситуации, когда компромисс просто недопустим, особенно если речь идет о безопасности за рулем. Автомобили немецкой компании-производителя BMW …</p>
            </div>
            <div class="news-block panel">
                <div class="news-title">
                    <h5>Запчасти для Митсубиси</h5>
                    <span>07.03.2017</span>                        
                </div>
                <p>Мы продаем оптом и в розницу запчасти для автомобилей Mitsubishi. К вашим услугам - самые разнообразные комплектующие от официального производителя по самым доступным ценам.</p>
            </div>
            <div class="news-block panel">
                <div class="news-title">
                    <h5>Запчасти для Рено</h5>
                    <span>07.03.2017</span>                        
                </div>
                <p>Несомненно, зашедшие на наш сайт являются давними и преданными поклонниками продукции крупнейшего французского автомобильного концерна Renault.</p>
            </div>
            <Arrow class="next" /> 
        </div>
        
        <button class="btn full-red">Читать еще</button>
      </div>
    </section>
</template>

<script>
import Arrow from '@/uikit/Arrow'

export default {
  name: 'News',
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