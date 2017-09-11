<template>
  <div class="delivery-content">
   <div class="container">
     <div class="panel-group">
       <div class="panel light">
         <span class="icon box"></span>
         <span>
           Доставка по Москве в указанный вами район осуществляется <a class="link" href="#">курьерской службой</a> и оплачивается при получении заказа курьеру.
         </span>
       </div>
       <div class="panel light">
         <span class="icon truck"></span>
         <span>
           Доставка в регионы осуществляется силами <a class="link" href="#">транспортной компании</a>. Сроки получения зависят от удаленности региона.
         </span>
       </div>
     </div>
      <div class="panel dark">
        <span class="alarm"></span> 
        <span>
          На любом этапе отправки Вы можете связаться с нашим консультантом по телефонам: +7 (495) 971-02-02, +7 (915) 471-02-02, +7 (925) 111-02-02 и узнать, когда прибудет запчасть. 
        </span>
      </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'DeliveryContent'
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion'; 
</style>
