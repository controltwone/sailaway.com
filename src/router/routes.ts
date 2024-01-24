import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'YeniUyelik', component: () => import('components/YeniUyelik.vue') },
      { path: 'comp2', component: () => import('components/TheHeaderBottom.vue') },
      { path: 'comp3', component: () => import('components/TheSiparis.vue') },
      { path: 'comp4', component: () => import('components/TheLogin.vue') },
      { path: 'TheVitrindekiler', component: () => import('components/TheVitrindekiler.vue') },
      { path: 'TheSepet', component: () => import('components/TheSepet.vue') },
      { path: 'TheCarusel', component: () => import('components/TheCarusel.vue') },
      { path: 'TheHeaderTop', component: () => import('components/TheHeaderTop.vue') },
      { path: 'TheHeaderMiddle', component: () => import('components/TheHeaderMiddle.vue') },
      { path: 'TheHeaderBottom', component: () => import('components/TheHeaderBottom.vue') },
      { path: 'TheHeader', component: () => import('components/TheHeader.vue') },
      { path: 'GirisYap', component: () => import('components/GirisYap.vue') },
      { path: 'TheMarkalar', component: () => import('components/TheMarkalar.vue') },
      { path: 'DetaylıArama', component: () => import('components/DetaylıArama.vue') },
      { path: 'TumBloglar', component: () => import('components/TumBloglar.vue') },
      { path: 'TheFooterTop', component: () => import('components/TheFooterTop.vue') },
      { path: 'TheFooterBottom', component: () => import('components/TheFooterBottom.vue') },
      { path: 'TheFooter', component: () => import('components/TheFooter.vue') },
      { path: 'MainPage', component: () => import('pages/MainPage.vue') },
      { path: 'UyelikPage', component: () => import('pages/UyelikPage.vue') },
      { path: 'GirisYapPage', component: () => import('pages/GirisYapPage.vue') },
      { path: 'SepetPage', component: () => import('pages/SepetPage.vue') },
      { path: 'BlogPage', component: () => import('pages/BlogPage.vue') },
      { path: 'DetayliAramaPage', component: () => import('pages/DetayliArama.vue') },


    ],
  },
  {
    path: '/sepet/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('layouts/MainLayout.vue') },
      { path: 'siparis', component: () => import('pages/TheSiparis.vue') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },

];

export default routes;
