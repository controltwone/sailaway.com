<template>
  <q-layout view="lHh lpR lFr">

    <!-- Drawer ve Sayfa İçeriği -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <div class="header-image">
          <img src="https://c.wallhere.com/photos/ea/5a/windsurfing_sport_sea_Sun-8569.jpg!d" alt="Header Image" />
          <div class="header-text"><strong>Ferhat Oğuncer - 210101012</strong></div>
        </div>
        <q-item-label header>Componentlerim</q-item-label>
        <component-link
          v-for="link in componentLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ComponentLink, {
  ComponentLinkProps,
} from 'components/ComponentLink.vue';

const componentLinks: ComponentLinkProps[] = [
{
    title: 'TheHeader-1',
    link: '/TheHeader',
  },

  {
    title: 'TheHeaderTop - 1.1',
    link: '/TheHeaderTop',
  },
  {
    title: 'TheHeaderMiddle - 1.2',
    link: '/TheHeaderMiddle',
  },
  {
    title: 'TheHeaderBottom - 1.3',
    link: '/TheHeaderBottom',
  },
  {
    title: 'YeniUyelik - 2',
    link: '/YeniUyelik',
  },
  {
    title: 'GirisYap - 3',
    link: '/GirisYap',
  },
  {
    title: 'TheSepet - 4',
    link: '/TheSepet',
  },
  {
    title: 'TheMarkalar - 5',
    link: '/TheMarkalar',
  },
  {
    title: 'TheCarusel - 6',
    link: '/TheCarusel',
  },
  {
    title: 'TheVitrindekiler - 7',
    link: '/TheVitrindekiler',
  },
  {
    title: 'DetaylıArama - 8',
    link: '/DetaylıArama',
  },
  {
    title: 'TumBloglar - 9',
    link: '/TumBloglar',
  },
  {
    title: 'TheFooter - 10',
    link: '/TheFooter',
  },
  {
    title: 'TheFooterTop - 10.1',
    link: '/TheFooterTop',
  },
  {
    title: 'TheFooterBottom - 10.2',
    link: '/TheFooterBottom',
  },
];

const leftDrawerOpen = ref(false);
</script>

<style scoped>
.header-image {
  width: 100%;
  position: relative;
  text-align: center;
}

.header-image img {
  max-width: 100%;
  height: auto;
}
</style>
