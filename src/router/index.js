import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '@/components/MainPage'
import AboutPage from '@/components/AboutPage'
import NewsPage from '@/components/NewsPage'

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
    }
  ],
});
