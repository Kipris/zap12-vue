<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrap">
      <div class="footer-item">
        <router-link :to="'/'" tag="div" class="footer-logo">
          <img src="./../../assets/img/Icon_Logo.svg" alt="logo">
        </router-link>
          <p class="description">
              Мы продаем оптом и в розницу запчасти для автомобилей Mitsubishi. К вашим услугам - 
              самые разнообразные комплектующие от официального производителя по самым доступным ценам.
          </p>
      </div>
      <div class="footer-item">
          <nav class="footer-nav">
              <a href="#">Каталоги</a>
              <router-link :to="'/news'" tag="a">Новости</router-link>
              <router-link :to="'/delivery'" tag="a">Доставка</router-link>
              <router-link :to="'/provider'" tag="a">Поставщикам</router-link>
              <router-link :to="'/about'" tag="a">О Нас</router-link>
          </nav>
      </div>
      <div class="footer-item">
          <nav class="footer-contacts">
              <span class="phone">
                  <a href="tel:+7(495)971-02-02">+7 (495) 971-02-02</a>
              </span>
              <span class="circle">
                  <a href="tel:+7(915)471-02-02">+7 (915) 471-02-02</a>
              </span>
              <span class="circle">
                  <a href="tel:+7(925)111-02-02">+7 (925) 111-02-02</a>
              </span>
              <span class="mail"><a href="mailto:zap12@gmail.com">zap12@gmail.com</a></span>
          </nav>
      </div>
      <div class="footer-item">
          <p class="location">г. Москва, Березовая аллея, 12, корп. 4</p>
          <button class="btn default">На карте</button>
      </div>
    </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
  @import './../../assets/theme/buttons';  
</style>
