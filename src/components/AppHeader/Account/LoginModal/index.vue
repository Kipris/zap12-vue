<template>
    <div class="login">
      <button class="btn red" @click="loginShow" v-if="!signedIn">Войти</button>
      <span class="signed-in" v-if="signedIn" @click="accountShow">{{user.email}}</span>
      <transition name="fade">
        <div class="dropdown-menu login-menu" v-show="loginShown">
          <div class="h3">Логин</div>  
          <form action="javascript:false;">
            <div class="input-wrap email">
              <span></span>
              <input type="email"
                      v-model="user.email"
                      @keyup.enter="handleLogIn"
                      placeholder="Электронная почта"
                      required>
            </div>
            <div class="input-wrap password">
              <span @click="passwordIsVisible" :class="{active: passwordVisible}"></span>
              <input id="input-password"
                      type="password"
                      v-model="user.password"
                      placeholder="Пароль"
                      required>
            </div>
            <div class="actions">
              <button class="btn light" @click="accountShow">Создать аккаунт</button>
              <button class="btn full-red"
                      @click="handleLogIn">Войти в кабинет</button>
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
            <button class="btn light" @click="loginShow">Выйти</button>
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
              <button class="btn light" @click="accountShow">Отмена</button>
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
              <button class="btn light" @click="accountShow">Отмена</button>
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
              <button class="btn light" @click="accountShow">Отмена</button>
              <button class="btn full-red" @click="accountShow">Отправить запрос</button>
            </div>
          </form>
        </div>
      </transition>

    </div>                  

</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../../node_modules/pavilion/scss/pavilion';
</style>
