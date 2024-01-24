<template>
  <q-layout view="lHh lpR lFr">

    <!-- Drawer ve Sayfa İçeriği -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <div class="header-image">
          <img src="https://c.wallhere.com/photos/ea/5a/windsurfing_sport_sea_Sun-8569.jpg!d" alt="Header Image" />
          <div class="header-text"><strong>Ferhat Oğuncer - 210101012</strong></div>
        </div>
        <q-item-label header>Pages</q-item-label>
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
    title: 'Main Page',
    link: '/MainPage',
  },
  {
    title: 'YeniUyelik Page',
    link: '/UyelikPage',
  },
  {
    title: 'GirisYap Page',
    link: '/GirisYapPage',
  },
  {
    title: 'Sepet Page',
    link: '/SepetPage',
  },
  {
    title: 'Blog Page',
    link: '/BlogPage',
  },
  {
    title: 'DetayliArama Page',
    link: '/DetayliAramaPage',
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
