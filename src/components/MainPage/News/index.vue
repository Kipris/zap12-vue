<template>
    <section class="news">
      <div class="container">           
        <div class="h1">Последние новости</div>
        <!-- TODO: CAROUSEL -->
        <div class="news-wrap">
            <Arrow class="prev" @click.native="prevSlide"/>
              <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
                <swiper-slide>
                <div class="news-block panel">
                    <div class="news-title">
                        <div class="h3">Запчасти для BMW</div>
                        <span>07.03.2017</span>                        
                    </div>
                    <p>В жизни бывают такие ситуации, когда компромисс просто недопустим, особенно если речь идет о безопасности за рулем. Автомобили немецкой компании-производителя BMW …</p>
                </div>
                </swiper-slide>
                <swiper-slide>
                <div class="news-block panel">
                    <div class="news-title">
                        <div class="h3">Запчасти для Митсубиси</div>
                        <span>07.03.2017</span>                        
                    </div>
                    <p>Мы продаем оптом и в розницу запчасти для автомобилей Mitsubishi. К вашим услугам - самые разнообразные комплектующие от официального производителя по самым доступным ценам.</p>
                </div>
                </swiper-slide>
                <swiper-slide>
                <div class="news-block panel">
                    <div class="news-title">
                        <div class="h3">Запчасти для Рено</div>
                        <span>07.03.2017</span>                        
                    </div>
                    <p>Несомненно, зашедшие на наш сайт являются давними и преданными поклонниками продукции крупнейшего французского автомобильного концерна Renault.</p>
                </div>
                </swiper-slide>
                <swiper-slide>
                <div class="news-block panel">
                    <div class="news-title">
                        <div class="h3">Запчасти для Рено</div>
                        <span>07.03.2017</span>                        
                    </div>
                    <p>Несомненно, зашедшие на наш сайт являются давними и преданными поклонниками продукции крупнейшего французского автомобильного концерна Renault.</p>
                </div>
                </swiper-slide>
                <swiper-slide>
                <div class="news-block panel">
                    <div class="news-title">
                        <div class="h3">Запчасти для Рено</div>
                        <span>07.03.2017</span>                        
                    </div>
                    <p>Несомненно, зашедшие на наш сайт являются давними и преданными поклонниками продукции крупнейшего французского автомобильного концерна Renault.</p>
                </div>
                </swiper-slide>
              </swiper>
            <Arrow class="next" @click.native="nextSlide"/> 
        </div>
        <router-link class="btn full-red" :to="'/news'" tag="button">Читать еще</router-link>
      </div>
    </section>
</template>

<script>
import Arrow from '@/uikit/Arrow'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'News',
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        // autoplay: 3000,
        slidesPerView: 3,
        // mousewheelControl: true,
        // autoHeight: true,
        setWrapperSize: true,
        spaceBetween: 40,
        loop: true,
        breakpoints: {
          1200: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    nextSlide() {
      this.swiper.slideNext(false, 300)
    },
    prevSlide() {
      this.swiper.slidePrev(false, 300)
    }
  },
  components: {
    Arrow,
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
  @import './../../../../node_modules/swiper/dist/css/swiper.css';
  @import './../../../assets/theme/buttons';

 
</style>