import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '@/components/MainPage'
import AboutPage from '@/components/AboutPage'
import NewsPage from '@/components/NewsPage'
import SearchPage from '@/components/SearchPage'
import HyundaiRepairPage from '@/components/HyundaiRepairPage'
import ProviderPage from '@/components/ProviderPage'
import DeliveryPage from '@/components/DeliveryPage'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/news',
      name: 'NewsPage',
      component: NewsPage
    },
    {
      path: '/searchresults',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/hyundairepair',
      name: 'HyundaiRepairPage',
      component: HyundaiRepairPage
    },
    {
      path: '/provider',
      name: 'ProviderPage',
      component: ProviderPage
    },
    {
      path: '/delivery',
      name: 'DeliveryPage',
      component: DeliveryPage
    }
  ],
});
