<template>
  <header class="header">
    <div class="navbar">
      <div class="container">
          <div class="navbar-wrap">         
            <router-link :to="'/'" class="navbar-logo" tag="a">
              <img src="./../../assets/img/Icon_Logo.svg" alt="logo">
            </router-link>                   
              <nav class="navbar-menu">
                  <span class="nav-link dropdown contacts" href="#" v-on:click="contactsShow" v-bind:class="{ active: contactsShown}">
                      +7 (495) 971-02-02
                      <transition name="fade">
                        <div class="dropdown-menu" v-show="contactsShown">
                          <nav>                                         
                            <a href="tel:+7(495)971-02-02">+7 (495) 971-02-02</a>                                          
                            <a href="tel:+7(915)471-02-02">+7 (915) 471-02-02</a>                                          
                            <a href="tel:+7(925)111-02-02">+7 (925) 111-02-02</a>                                          
                            <a href="mailto:zap12@gmail.com">zap12@gmail.com</a>
                          </nav>
                        </div>
                      </transition>
                      
                  </span>
                  
                  
                  <a class="nav-link navbar-dropdown" v-on:click="detailsShow" v-bind:class="{ active: detailsShown }">
                    <span>Запчасти</span>
                    <transition name="fade">
                      <div class="dropdown" v-show="detailsShown">
                        <div class="container">
                            <div class="car-row">
                              <div v-for="car in cars.row1"
                                    @click="goTo(car)"><span>{{car}}</span></div>
                            </div>
                            <div class="car-row">
                                <div v-for="car in cars.row2"
                                    @click="goTo(car)"><span>{{car}}</span></div>
                            </div>         
                            <div class="car-row">
                              <div v-for="car in cars.row3"
                                    @click="goTo(car)"><span>{{car}}</span></div>
                            </div>
                            <div class="car-row">
                              <div v-for="car in cars.row4"
                                    @click="goTo(car)"><span>{{car}}</span></div>
                            </div>  
                            <div class="car-row">
                              <div v-for="car in cars.row5"
                                    @click="goTo(car)"><span>{{car}}</span></div>
                            </div>
                        </div>                                   
                      </div>
                    </transition>
                  </a>
                  <router-link class="nav-link" :to="'/news'" tag="a">Новости</router-link>
                  <router-link class="nav-link" :to="'/delivery'" tag="a">Доставка</router-link>
                  <router-link class="nav-link" :to="'/provider'" tag="a">Поставщикам</router-link>
                  <router-link class="nav-link" :to="'/about'" tag="a">О Нас</router-link>
              </nav>                        
              <div class="navbar-actions">
                  <span class="cart dropdown" v-on:click="cartShow" v-bind:class="{ active: cartShown}">
                      <span class="cart-img"></span>
                      <transition name="fade">
                        <Cart v-show="cartShown"/>
                      </transition>
                  </span>

                  <div class="login">
                    <button class="btn red" v-on:click="loginShow">Войти</button>
                    <transition name="fade">
                      <div class="dropdown-menu" v-show="loginShown">
                        <div class="h3">Логин</div>  
                        <form action="javascript:false;">
                          <input type="text" placeholder="Электронная почта *" required>
                          <input type="password" placeholder="Пароль" required>
                          <div class="actions">
                            <button class="btn default" v-on:click="accountShow">Создать аккаунт</button>
                            <button class="btn full-red" v-on:click="accountShow">Войти в кабинет</button>
                          </div>
                        </form>
                        <div class="forgot">Забыл пароль?</div>
                      </div>
                    </transition>
                    <transition name="fade">
                      <div class="dropdown-menu" v-show="accountShown">
                        <div class="h3">Личный кабинет</div>
                        <div class="info">
                          <div class="email">nikolayschneider@gmail.com</div>
                          <div class="balance">
                            <span>Баланс</span>
                            <span>0,00 Р</span>
                          </div>
                          <div class="discount">
                            <span>Скидка</span>
                            <span>0% (РОЗНИЦА)</span>
                          </div>
                        </div>

                        <div class="info-menu">

                        </div>
                        
                        <div class="actions">
                          
                        </div>

                      </div>  
                      
                    </transition>
                  </div>                  

                  <div class="toggle-menu-wrap">
                    <input type="checkbox" name="menu" id="menu" class="toggle-menu-checkbox">
                    <label for="menu" class="toggle-menu-icon" v-on:click="responsiveMenuShow" v-bind:class="{ opened: responsiveMenuShown}"><span></span></label>
                    <nav class="toggle-menu">
                      <router-link :to="'/searchresults'" tag="a">Запчасти</router-link>
                      <router-link :to="'/news'" tag="a">Новости</router-link>
                      <router-link :to="'/delivery'" tag="a">Доставка</router-link>
                      <router-link :to="'/provider'" tag="a">Поставщикам</router-link>
                      <router-link :to="'/about'" tag="a">О Нас</router-link>                            
                      <a href="tel:+7(495)971-02-02">+7 (495) 971-02-02</a>
                      <a href="tel:+7(915)471-02-02">+7 (915) 471-02-02</a>
                      <a href="tel:+7(925)111-02-02">+7 (925) 111-02-02</a>
                      <a href="mailto:zap12@gmail.com" class="nav-email">zap12@gmail.com</a>
                      <button class="btn red">Войти</button>
                    </nav>
                  </div>

              </div> 
          </div>                        
            
      </div>
                        
  </div>
  </header>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import Cart from './Cart'

export default {
  name: 'AppHeader',
  data() {
    return {
      cars: {
        row1: ['Audi', 'BMW', 'Chevrolet', 'Crysler', 'Citroen', 'Daewo0', 'Dodge'],
        row2: ['Fiat', 'Ford', 'Honda', 'Hyundai', 'Infinity', 'Isuzu', 'Jaguar'],
        row3: ['Jeep', 'Kia', 'Lexus', 'Mazda', 'Mercedes-benz', 'Mini', 'Mitsubishi'],
        row4: ['Nissan', 'Opel', 'Peugeot', 'Porshe', 'Renault', 'Saab', 'Seat'],
        row5: ['Skoda', 'Ssangyong', 'Subary', 'Suzuki', 'Toyota', 'Volvo', 'Volkswagen']
      },
      contactsShown: false,
      detailsShown: false,
      cartShown: false,
      responsiveMenuShown: false,
      loginShown: false,
      accountShown: false
    }
  },
  methods: {
    ...mapMutations('Cart', [
      'setModelFilter'
    ]),
    ...mapActions('Cart', [
      'getDetails'
    ]),
    goTo(car) {
      this.setModelFilter(car)
      if (this.$route.path === '/') {
        this.$router.push({ path: 'searchresults' })
      } else {
        this.getDetails()
      }
    },
    contactsShow() {
      this.contactsShown = !this.contactsShown;
      this.detailsShown = false;
      this.cartShown = false;
      this.responsiveMenuShown = false;
    },
    detailsShow() {
      this.contactsShown = false;
      this.detailsShown = !this.detailsShown;
      this.cartShown = false;
      this.responsiveMenuShown = false;
    },
    cartShow() {
      this.contactsShown = false;
      this.detailsShown = false;
      this.cartShown = !this.cartShown;
      this.responsiveMenuShown = false;
    },
    responsiveMenuShow() {
      this.contactsShown = false;
      this.detailsShown = false;
      this.cartShown = false;
      this.responsiveMenuShown = !this.responsiveMenuShown;
    },
    loginShow() {
      this.loginShown = true;
      this.accountShown = false;
    },
    accountShow() {
      this.loginShown = false;
      this.accountShown = true;
    }
  },
  components: {
    Cart
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion'; 
</style>
