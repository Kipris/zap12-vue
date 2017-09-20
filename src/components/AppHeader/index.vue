<template>
  <div>
    <header class="header">
      <div class="navbar">
        <div class="container">
            <div class="navbar-wrap">         
              <router-link :to="'/'" class="navbar-logo" tag="a">
                <img src="./../../assets/img/Icon_Logo.svg" alt="logo">
              </router-link>                   
                <nav class="navbar-menu">
                    <span class="nav-link dropdown contacts" href="#" v-bind:class="{ active: contactsShown}">
                      <span v-on:click="contactsShow">+7 (495) 971-02-02</span>
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
                    
                    
                    <a class="nav-link navbar-dropdown" v-bind:class="{ active: detailsShown }">
                      <span class="" v-on:click="detailsShow">Запчасти</span>
                      <transition name="fade">
                        <div class="details-dropdown dropdown" v-show="detailsShown">
                          <div class="container">
                              <div class="car-row">
                                <div v-for="car in cars.row1"
                                      @click="goTo(car)"><span class="detail-link">{{car}}</span></div>
                              </div>
                              <div class="car-row">
                                  <div v-for="car in cars.row2"
                                      @click="goTo(car)"><span class="detail-link">{{car}}</span></div>
                              </div>         
                              <div class="car-row">
                                <div v-for="car in cars.row3"
                                      @click="goTo(car)"><span class="detail-link">{{car}}</span></div>
                              </div>
                              <div class="car-row">
                                <div v-for="car in cars.row4"
                                      @click="goTo(car)"><span class="detail-link">{{car}}</span></div>
                              </div>  
                              <div class="car-row">
                                <div v-for="car in cars.row5"
                                      @click="goTo(car)"><span class="detail-link">{{car}}</span></div>
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
                    <span class="cart dropdown" v-bind:class="{ active: cartShown }">
                        <span class="cart-img" @click="cartShow"></span>
                        <transition name="fade">
                          <Cart v-show="cartShown"/>
                        </transition>
                    </span>

                    <div class="login">
                      <button class="btn red" @click="loginShow" v-if="!signedIn">Войти</button>
                      <span class="signed-in" v-if="signedIn" @click="accountShow">{{user.email}}</span>
                      <transition name="fade">
                        <div class="dropdown-menu login-menu" v-show="loginShown">
                          <div class="h3">Логин</div>  
                          <form action="javascript:false;">
                            <div class="input-wrap email">
                              <span></span>
                              <input type="email" v-model="user.email" placeholder="Электронная почта" required>
                            </div>
                            <div class="input-wrap password">
                              <span @click="passwordIsVisible" :class="{active: passwordVisible}"></span>
                              <input type="password" v-model="user.password" placeholder="Пароль" required>
                            </div>
                            <div class="actions">
                              <button class="btn default" @click="accountShow">Создать аккаунт</button>
                              <button class="btn full-red" @click="accountShow">Войти в кабинет</button>
                            </div>
                          </form>
                          <div class="forgot" @click="forgotPasswordShow">Забыл пароль?</div>
                        </div>
                      </transition>

                      <transition name="fade">
                        <div class="dropdown-menu account-menu" v-show="accountShown">
                          <div class="h3">Личный кабинет</div>
                          <div class="info">
                            <div class="email">nikolayschneider@gmail.com</div>
                            <div class="balance">
                              <span>Баланс</span>
                              <span>0,00 Р</span>
                            </div>
                            <div class="discount">
                              <span>Скидка</span>
                              <span><span class="red">0%</span>  (РОЗНИЦА)</span>
                            </div>
                          </div>
                          <div class="info-menu">
                            <div class="personal-info" @click="personalInfoShow">Личная информация</div>
                            <div class="orders" @click="ordersShow">Мои заказы (0)</div>
                            <div class="garage" @click="garageShow">Мой гараж</div>
                          </div>
                          <div class="actions">
                            <button class="btn default" @click="loginShow">Выйти</button>
                            <button class="btn full-red">Пополнить баланс</button>
                          </div>
                        </div>  
                      </transition>

                      <transition name="fade">
                        <div class="dropdown-menu personal-info-menu" v-show="personalInfoIsShown">
                          <div class="menu-title">
                            <span class="back" @click="accountShow"></span>
                            <div class="h3">Личная информация</div>
                          </div>
                          <form action="">
                            <label for="phone">Изменить телефон</label>
                            <div class="input-wrap">
                              <input id="phone" type="text" placeholder="Основной телефон">
                            </div>
                            <div class="input-wrap">
                              <input type="text" placeholder="Дополнительный телефон">
                            </div>
                            <label for="password">Изменить пароль</label>
                            <div class="input-wrap">
                              <input id="password" type="password" placeholder="Новый пароль">
                            </div>
                            <div class="input-wrap">
                              <input type="password" placeholder="Подтверждение нового пароля">
                            </div>
                            <div class="actions">
                              <button class="btn default" @click="accountShow">Отмена</button>
                              <button class="btn full-red" @click="accountShow">Сохранить</button>
                            </div>
                          </form>
                        </div>
                      </transition>

                      <transition name="fade">
                        <div class="dropdown-menu garage-menu" v-show="garageIsShown">
                          <div class="menu-title">
                            <span class="back" @click="accountShow"></span>
                            <div class="h3">Мой гараж</div>
                          </div>
                          <form action="">
                            <label>Мои автомобили</label>
                            <div class="panel">
                              <div class="car-img"></div>

                              <!-- v-for -->
                              <div class="car-info">
                                <div class="car-model">BMW M8 2016</div>
                                <div class="car-vin">VIN: 432453459355893</div>
                              </div>
                              <div class="car-delete"></div>
                            </div>

                            <label>Добавить автомобиль</label>
                            <div class="form-group">
                              <div class="input-wrap mark">
                                <input type="text" placeholder="Марка">
                              </div>
                              <div class="input-wrap model">
                                <input type="text" placeholder="Модель">
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="input-wrap modification">
                                <input type="text" placeholder="Модификация">
                              </div>
                              <div class="input-wrap year">
                                <input type="text" placeholder="Год выпуска">
                              </div>
                            </div>
                            <div class="input-wrap vin">
                              <input type="text" placeholder="VIN">
                            </div>
                            <div class="actions">
                              <button class="btn default" @click="accountShow">Отмена</button>
                              <button class="btn full-red">Сохранить</button>
                            </div>
                          </form>
                        </div>
                      </transition>

                      <transition name="fade">
                        <div class="dropdown-menu forgot-menu" v-show="forgotPasswordIsShown">
                          <div class="menu-title">
                            <div class="h3">Восстановление пароля</div>
                          </div>
                          <form action="">
                            <label>Для восстановления, введите электронную почту при регистрации</label>
                            <div class="input-wrap email">
                              <span></span>
                              <input type="email" placeholder="Электронная почта">
                            </div>
                            <div class="actions">
                              <button class="btn default" @click="accountShow">Отмена</button>
                              <button class="btn full-red" @click="accountShow">Отправить запрос</button>
                            </div>
                          </form>
                        </div>
                      </transition>

                    </div>                  

                    <div class="toggle-menu-wrap">
                      <input type="checkbox" name="menu" id="menu" class="toggle-menu-checkbox">
                      <label for="menu" class="toggle-menu-icon" 
                        @click="responsiveMenuShow" 
                        :class="{ opened: responsiveMenuShown && !loginShown }">
                        <span></span>
                      </label>
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
                        <button class="btn red" @click="loginShow" v-if="!signedIn">Войти</button>
                        <a class="signed-in" v-if="signedIn" @click="accountShow">{{user.email}}</a>
                      </nav>
                    </div>

                </div> 
            </div>                        
              
        </div>               
      </div>
    </header>
    <CartModal v-if="false" />
    <OrderHistoryModal v-if="false" />
  </div>
  
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import Cart from './Cart'
import CartModal from './CartModal'
import OrderHistoryModal from './OrderHistoryModal'

export default {
  name: 'AppHeader',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
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
      accountShown: false,
      signedIn: false,
      passwordVisible: false,
      personalInfoIsShown: false,
      ordersIsShown: false,
      garageIsShown: false,
      forgotPasswordIsShown: false
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
      this.loginShown = false;
    },
    detailsShow() {
      this.contactsShown = false;
      this.detailsShown = !this.detailsShown;
      this.cartShown = false;
      this.responsiveMenuShown = false;
      this.loginShown = false;
    },
    cartShow() {
      this.contactsShown = false;
      this.detailsShown = false;
      this.cartShown = !this.cartShown;
      this.responsiveMenuShown = false;
      this.loginShown = false;
    },
    responsiveMenuShow() {
      this.contactsShown = false;
      this.detailsShown = false;
      this.cartShown = false;
      this.loginShown = false;
      this.accountShown = false;
      this.forgotPasswordIsShown = false;
      this.personalInfoIsShown = false;
      this.ordersIsShown = false;
      this.garageIsShown = false;
      this.responsiveMenuShown = !this.responsiveMenuShown;
    },
    loginShow() {
      this.contactsShown = false;
      this.detailsShown = false;
      this.cartShown = false;
      this.loginShown = !this.loginShown;
      this.accountShown = false;
      this.signedIn = false;
      this.forgotPasswordIsShown = false;
      this.responsiveMenuShown = false;
    },
    accountShow() {
      if (this.user.email !== '' && this.user.password !== '') {
        this.contactsShown = false;
        this.detailsShown = false;
        this.cartShown = false;
        this.loginShown = false;
        this.accountShown = !this.accountShown;
        this.signedIn = true;
        this.personalInfoIsShown = false;
        this.responsiveMenuShown = false;
      }
    },
    isSignedIn() {
      return this.signedIn
    },
    passwordIsVisible() {
      this.passwordVisible = !this.passwordVisible;
    },
    forgotPasswordShow() {
      this.contactsShown = false;
      this.detailsShown = false;
      this.cartShown = false;
      this.loginShown = false;
      this.accountShown = false;
      this.forgotPasswordIsShown = true;
      this.personalInfoIsShown = false;
      this.ordersIsShown = false;
      this.garageIsShown = false;
      this.responsiveMenuShown = false;
    },
    personalInfoShow() {
      this.contactsShown = false;
      this.detailsShown = false;
      this.cartShown = false;
      this.accountShown = false;
      this.forgotPasswordIsShown = false;
      this.personalInfoIsShown = true;
      this.ordersIsShown = false;
      this.garageIsShown = false;
      this.responsiveMenuShown = false;
    },
    ordersShow() {
      this.contactsShown = false;
      this.detailsShown = false;
      this.cartShown = false;
      this.accountShown = false;
      this.forgotPasswordIsShown = false;
      this.personalInfoIsShown = false;
      this.ordersIsShown = true;
      this.garageIsShown = false;
      this.responsiveMenuShown = false;
    },
    garageShow() {
      this.contactsShown = false;
      this.detailsShown = false;
      this.cartShown = false;
      this.accountShown = false;
      this.forgotPasswordIsShown = false;
      this.personalInfoIsShown = false;
      this.ordersIsShown = false;
      this.garageIsShown = true;
      this.responsiveMenuShown = false;
    }
  },
  components: {
    Cart,
    CartModal,
    OrderHistoryModal
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../node_modules/pavilion/scss/pavilion'; 
</style>
