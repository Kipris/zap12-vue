<template>
    <section class="details">
      <div class="container">
        <div class="h1">У нас вы можете приобрести следующие запчасти:</div>  
        <div class="details-wrap">
            <div class="details-item panel body-details" v-scroll-reveal>
                <h3>Кузовные детали</h3>
                <Arrow v-bind:class="{ arrowContainer: true }" />
                <button class="btn full-red"  @click="handleSelect('body-details')">Смотреть</button>
            </div>
            <div class="details-item panel chassis" v-scroll-reveal>
                <h3>Ходовую часть автомобиля</h3>
                <Arrow v-bind:class="{ arrowContainer: true }" />
                <button class="btn full-red"  @click="handleSelect('chassis')">Смотреть</button>
            </div> 
        </div>
        <div class="details-wrap">
            <div class="details-item panel optics" v-scroll-reveal>
                <h3>Оптика</h3>
                <Arrow v-bind:class="{ arrowContainer: true }" />
                <button class="btn full-red" @click="handleSelect('optics')" >Смотреть</button>
            </div>
            <div class="details-item panel consumables" v-scroll-reveal>
                <h3>Расходные материалы</h3>
                <Arrow v-bind:class="{ arrowContainer: true }" />
                <router-link class="btn full-red" :to="'/searchresults'" tag="button">Смотреть</router-link>
            </div>
            <div class="details-item panel care" v-scroll-reveal>
                <h3>Средства по уходу</h3>
                <Arrow v-bind:class="{ arrowContainer: true }" />
                <router-link class="btn full-red" :to="'/searchresults'" tag="button">Смотреть</router-link>
            </div>   
        </div>
      </div>
    </section>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Arrow from '@/uikit/Arrow'
import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal)

export default {
  name: 'Detail',
  methods: {
    ...mapActions('Cart', [
      'getDetails'
    ]),
    ...mapMutations('Cart', [
      'setDetailType'
    ]),
    handleSelect(detailType) {
      this.setDetailType(detailType)
      this.$router.push('/searchresults')
    }
  },
  components: {
    Arrow
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles';
  @import './../../../../node_modules/pavilion/scss/pavilion';
</style>

<style lang="scss">
  .details-item {
    // position: relative;
    .arrowContainer {
      position: absolute;
      left: 40px;
      bottom: 30px;
      width: 40px;
      height: 40px;
      transform: scale(-1);
    }
  }
  .details-item:hover {
    .arrowContainer {
      display: none;
    }
  }
</style>
