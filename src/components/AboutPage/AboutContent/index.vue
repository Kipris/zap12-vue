<template>
  <div class="about-content">
    <div class="container">
      <div class="panel light intro">
        <small class="dark">Мы предлагаем автозапчасти на обширный модельный ряд автомобилей, а также полный спектр расходных материалов для регламентированного прохождения ТО.
        Чтобы вам было удобнее выбрать необходимую деталь и сделать заказ, мы открыли для вас Интернет магазин запчастей в Москве с доставкой по столице и в другие регионы России...</small>
        <b-collapse id="collapse1" class="accordion mt-2">
            В нашем каталоге предоставлено более 30 брендов и более 600 тысяч позиций, включая оригинальные запчасти из Японии, Европы и Америки, а также аналоговые детали. Наш Интернет магазин запчастей постоянно обновляется, и если сегодня вы не нашли в каталоге какой-нибудь детали, позвоните нам, может она уже ждет вас на складе!
            Если перед вами встала проблема найти оригинальные запчасти на американские иномарки или автомобили, произведенные в любой европейской стране, мы можем привезти вам любую позицию под заказ в сжатые сроки.
            Мы рады предложить вам аксессуары и комплектующие, изготовленные в таких странах, как Германия, Великобритания, Франция, Италия, Испания, Польша. У всех наших поставщиков солидный опыт в производстве запчастей и безупречная репутация, ведь заключая договор на поставку с заводом-изготовителем, мы внимательно изучаем все сертификаты, а также отзывы пользователей, чтобы предложить вам только самую качественную продукцию. Покупая запчасти на иномарки в Интернет магазине нашей компании, вы можете быть уверены в их безупречном исполнении.
            Наши консультанты всегда рады помочь вам подобрать оптимальный вариант для вашего автомобиля по телефону или при личной встречи. Если вы ищите возможность купить запчасти для иномарок в Москве оптом, мы готовы предоставить вам выгодные бонусные программы.
            Автосервисам и станциям технического обслуживания предлагается первоначальная скидка в размере 10% от общей цены покупки. Также у нас есть прогрессивные скидки для постоянных клиентов. Вы сможете на собственном опыте убедиться, что работать с нами приятно и выгодно!
        </b-collapse>
         
        <button class="btn black" v-b-toggle.collapse1 @click="toggled=!toggled">
          <span v-show="toggled">Подробнее</span>
          <span v-show="!toggled">Скрыть</span>
        </button>
      </div>

      <div class="contact">
        <div class="h1">Форма связи</div>
        <div class="panel light contact-wrap">
            <div class="left">
                <div class="h2">Контакты</div>
                <nav class="contact-nav">
                    <span>ООО «ЛюксАвто»</span>
                    <span>ОГРН 1147748016921</span>
                    <span>ИНН/КПП 9715010613/771501001</span>
                    <span>
                        <b>Юридический адрес</b>: 127273, г. Москва, Березовая аллея, владение 12, корп. 4
                        р/с 40702810000500000452
                        в ОАО «МОСКОВСКИЙ КРЕДИТНЫЙ БАНК»
                        БИК 044585659, к/с 30101810300000000659
                    </span>
                </nav>
            </div>
            <div class="right">
                <form action="">
                    <div class="input-wrap name">
                      <input type="text" placeholder="Фамилия Имя *" required>
                    </div>
                    <div class="input-wrap email">
                      <input type="text" placeholder="Электронная почта *" required>
                    </div>
                    <textarea name="" id="" cols="30" rows="3" placeholder="Ваше сообщение, предложение"></textarea>
                    <button type="submit" class="btn black">Отправить</button>
                </form>
            </div>
        </div>
      </div>  

      <div class="panel map">    
        <div class="h1">Мы на карте</div>
        <button class="btn white" @click="mapModalIsShown=!mapModalIsShown">Смотреть</button>
        <gmap-map
          :center="{lat:55.8495078, lng:37.6172781}"
          :zoom="15"
          map-type-id="terrain">
          <gmap-marker :position="{lat:55.8495078, lng:37.6172781}"></gmap-marker>
        </gmap-map>
      </div>

    </div>
    <transition name="fade">
    <MapModal v-if="mapModalIsShown"
              @close="mapModalIsShown = false"/>
    </transition>
    
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { bCollapse } from 'bootstrap-vue/lib/components'
import * as VueGoogleMaps from 'vue2-google-maps'
import MapModal from './../../MapModal'

Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places'
  }
})

export default {
  name: 'AboutContent',
  data() {
    return {
      toggled: true,
      mapModalIsShown: false
    }
  },
  components: {
    bCollapse,
    MapModal
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion'; 
</style>

<style lang="scss">
  .gmnoprint,
  .gm-style-cc,
  .gm-fullscreen-control {
    display: none;
  }
</style>
