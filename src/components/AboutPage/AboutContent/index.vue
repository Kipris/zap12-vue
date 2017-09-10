<template>
  <div class="about-content">
    <div class="container">
      <div class="panel light intro">
        <small class="dark">Мы рады предложить вам аксессуары и комплектующие, изготовленные в таких странах, 
          как Германия, Великобритания, Франция, Италия, Испания, Польша. 
          У всех наших поставщиков солидный опыт в производстве запчастей и 
          безупречная репутация, ведь заключая договор на поставку с 
          заводом-изготовителем, мы внимательно изучаем все сертификаты, 
          а также отзывы пользователей, чтобы предложить вам только самую 
          качественную продукцию.</small>
        <button class="btn black">Подробнее</button>
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
                      <input type="text" placeholder="Фамилия Имя *">
                    </div>
                    <div class="input-wrap email">
                      <input type="text" placeholder="Электронная почта *">
                    </div>
                    <textarea name="" id="" cols="30" rows="3" placeholder="Ваше сообщение, предложение"></textarea>
                    <button type="submit" class="btn black">Отправить</button>
                </form>
            </div>
        </div>
      </div>  

      <div class="panel map">    
        <div class="h1">Мы на карте</div>
        <button class="btn white">Смотреть</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutContent'
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion'; 
</style>
