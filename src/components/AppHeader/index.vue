<template>
  <header class="header">
    <div class="navbar">
      <div class="container">
          <div class="navbar-wrap">         
            <router-link :to="'/'" class="navbar-logo" tag="a">
              <img src="./../../assets/img/Icon_Logo.svg" alt="logo">
            </router-link>                   
              <nav class="navbar-menu">
                  <span class="dropdown contacts" href="#">
                      +7 (495) 971-02-02
                      <div class="dropdown-menu">
                          <nav>                                         
                            <a href="tel:+7(495)971-02-02">+7 (495) 971-02-02</a>                                          
                            <a href="tel:+7(915)471-02-02">+7 (915) 471-02-02</a>                                          
                            <a href="tel:+7(925)111-02-02">+7 (925) 111-02-02</a>                                          
                            <a href="mailto:zap12@gmail.com">zap12@gmail.com</a>
                          </nav>
                      </div>
                  </span>
                  
                  
                  <a class="navbar-dropdown" href="#">Запчасти</a>
                  <router-link :to="'/news'" tag="a">Новости</router-link>
                  <a href="#">Доставка</a>
                  <a href="#">Поставщикам</a>
                  <router-link :to="'/about'" tag="a">О Нас</router-link>
              </nav>                        
              <div class="navbar-actions">
                  <span class="cart dropdown">
                      <img src="./../../assets/img/ic_cart.svg" alt="Корзина">
                      <Cart />
                  </span>
                  
                  <button class="btn red">Войти</button>
                  
                  <div class="navbar-toggle">
                      <span></span>
                  </div>
              </div> 
          </div>                        
            
      </div>
                        
  </div>
  </header>
</template>

<script>
import Cart from './Cart'

export default {
  name: 'AppHeader',
  components: {
    Cart
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion';
  @import './../../assets/theme/buttons';  
</style>
