<template>
  <div class="modal-backdrop">
    <div class="modal">
        <div class="modal-content">
          <div class="modal-title">
          <div class="h1">1 товар в корзине</div>
          <span class="cross">✖</span>
        </div>

        <div class="modal-body">
<table>
          <thead>
            <th>Производитель</th>
            <th>Артикул</th>
            <th>Наименование</th>
            <th>Кол-во</th>
            <th>Цена</th>
          </thead>
          <tbody>
            <tr>
              <td>Mapco</td>
              <td>63110</td>
              <td>
                <span>Фильтр топливный ДИЗЕЛЬ FIAT, FORD, OPEL, VW, RENAULT, SEAT</span>
                <span class="trash"></span>
              </td>
              <td class="amount-row">
                <!-- <button class="sign" @click.stop="changeAmount({ detailId: detail.id, sign: '-' })"> - </button>
                <input type="text" class="amount" v-model="detail.amount">
                <button class="sign" @click.stop="changeAmount({ detailId: detail.id, sign: '+' })"> + </button> -->
                <button class="sign"> - </button>
                <input type="text" class="amount">
                <button class="sign"> + </button>
              </td>
              <td class="price-row">
                2 439,00 Р
              </td>
            </tr>
          </tbody>
        </table>

        <div class="options">
          <div class="h1">ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ</div>
          <div class="promocode">
            <span class="promocode-icon"></span>
            <span class="title">Промокод</span>
            <span class="chevron-icon"></span>
          </div>
          <div class="delivery">
            <span class="promocode-icon"></span>
            <span class="title">Доставка</span>
            <span class="chevron-icon"></span>
          </div>
          <div class="payment-variants">
            <div class="heading">
              <span class="payment-icon"></span>
              <span class="title">Варианты оплаты</span>
              <span class="chevron-icon"></span>
            </div>
            <div class="body">
              <div>Оплата электронными способами оплаты с помощью Robokassa 
                (Электронным кошельком, Через интернет-банк, Банковской картой, 
                В терминале, Сотовые операторы, Другие способы)</div>
              <div>
                <label>
                  <input type="radio" name="payment">
                  50% от суммы заказа
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="payment">
                  Вся сумма заказа
                </label>
              </div>  
            </div>
            
          </div>



        </div>
        
        <div class="total-sum">
          <div class="total">
            <span>Сумма заказа</span>
            <span>2 439 Р</span>
          </div>
          <div class="discount">
            <span>Со скидкой</span>
            <span class="red">2 149 Р</span>
          </div>
        </div>

        <div class="actions">
          <button class="btn black">Пересчитать</button>
          <button class="btn full-red">Оформить</button>
        </div>
        </div>
        

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CartModal'
}
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
