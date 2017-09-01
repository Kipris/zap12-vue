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
                  
                  
                  <a class="navbar-dropdown" href="#">
                    <span>Запчасти</span>
                    <div class="dropdown">
                      <div class="container">
                          <div class="car-row">
                              <div><span>Audi</span></div>
                              <div><span>BMW</span></div>
                              <div><span>Chevrolet</span></div>
                              <div><span>Crysler</span></div>
                              <div><span>Citroen</span></div>
                              <div><span>Daewoo</span></div>
                              <div><span>Dodge</span></div>
                          </div>
                          <div class="car-row">
                              <div> <span>Fiat</span> </div>
                              <div> <span>Ford</span> </div>
                              <div> <span>Honda</span> </div>
                              <div> <span>Hyundai</span> </div>
                              <div> <span>Infinity</span> </div>
                              <div> <span>Isuzu</span> </div>
                              <div> <span>Jaguar</span> </div>
                          </div>         
                          <div class="car-row">
                            <div><span>Jeep</span></div>
                            <div><span>Kia</span></div>
                            <div><span>Lexus</span></div>
                            <div><span>Mazda</span></div>
                            <div><span>Mercedes-benz</span></div>
                            <div><span>Mini</span></div>
                            <div><span>Mitsubushi</span> </div>                             
                          </div>
                          <div class="car-row">
                            <div><span>Nissan</span></div>
                            <div><span>Opel</span></div>
                            <div><span>Peugeot</span></div>
                            <div><span>Porshe</span></div>
                            <div><span>Renault</span></div>
                            <div><span>Saab</span></div>
                            <div><span>Seat</span> </div>
                          </div>  
                          <div class="car-row">
                            <div><span>Skoda</span></div>
                            <div><span>Ssangyong</span></div>
                            <div><span>Subaru</span></div>
                            <div><span>Suzuki</span></div>
                            <div><span>Toyota</span></div>
                            <div><span>Volvo</span></div>
                            <div><span>Vokswagen</span> </div>
                          </div>    
                      </div>                                   
                    </div>
                  </a>
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
