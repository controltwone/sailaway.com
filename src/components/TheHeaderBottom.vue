<template>
  <q-bar class="q-bar">
    <div v-for="menuItem in menuItems" :key="menuItem.label" class="menu-item">
      <q-item-label style="font-size: 13px; font-weight: 600; ;" flat @mouseover="openMenu(menuItem)">
       <a> {{ menuItem.label }} </a>
      </q-item-label>
      <q-menu v-model="menuItem.menuVisible" anchor="bottom start" self="top start">
        <div class="horizontal-menu" v-if="menuItem.label === 'KANOLAR'">
          <div v-for="subItem in kanolarSubItems" :key="subItem.name" class="horizontal-menu-item">
            <img :src="subItem.imageUrl" :alt="subItem.name" class="menu-image">
            <q-item clickable>
              {{ subItem.name }}
            </q-item>
          </div>
        </div>
        <!-- Diğer alt menü öğeleri buraya eklenebilir -->
      </q-menu>
    </div>
  </q-bar>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'HorizontalMenu',
  setup() {
    const menuItems = reactive([
      { label: 'KANOLAR', menuVisible: false },
      { label: 'PEDALBOARD', menuVisible: false },
      { label: 'WATER JET SYSTEMS & E-FOIL', menuVisible: false },
      { label: 'SUP-KÜREK SÖRFÜ', menuVisible: false },
      { label: 'RÜZGAR SÖRFÜ - FOIL', menuVisible: false },
      { label: 'YELKEN', menuVisible: false },
      { label: 'SU SPORLARI', menuVisible: false },
      { label: 'PLATFORM', menuVisible: false },
      { label: 'DONANIMLAR', menuVisible: false },
      { label: 'KİRALAMA', menuVisible: false }
    ]);

    const kanolarSubItems = [
      { name: 'PEDALLI KANOLAR', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/products/026/hobie-mirage-passport-10-5-sailaway-kano-kayaking-kayak-sari_min.png?revision=1697143329' },
      { name: 'YELKENLİ KANOLAR', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/categories/59/23.png?revision=1607331553' },
      { name: 'BALIKÇI KANOLAR', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/categories/60/kano.png?revision=1607337356' },
      { name: 'ŞİŞME KANOLAR', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/categories/65/hobie-sailaway-pompa-sisirilebilir%20kano-kurekli-2021-%204%20kisilik%20kano-itrek%2014%20duo.png?revision=1610550009' },
      { name: 'TEK KİŞİLİK KANOLAR', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/products/019/tahe-marine-bicsport-sailaway-sit-in-kano-fit158-kayak-kayaking-red_min.png?revision=1697143329' },
      { name: 'ÇİFT KİŞİLİK KANOLAR', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/categories/58/2.png?revision=1607337667' },
      { name: 'SIT-IN KANOLAR', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/categories/61/21.png?revision=1607337682' },
      { name: 'BOT', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/categories/66/Basliksiz-1.jpg?revision=1607339279' },
      { name: 'AKSESUARLAR', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/categories/62/aksesuar.png?revision=1607339151' },
      { name: 'KÜREKLER', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/categories/73/Basliksiz-1%20kopya.jpg?revision=1608715608' },
      { name: 'KORUYUCU DONANIMLAR', imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/categories/99/Koruyucu%20donanimlar.jpg?revision=1612773741' }
    ];

    function openMenu(menuItem: any) {
      menuItem.menuVisible = true;
    }

    return { menuItems, openMenu, kanolarSubItems };
  }
});
</script>

<style scoped>
.q-bar {
  display: flex; /* Keep using flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%; /* Full width of the container */
  background-color: white; /* Background color */
  padding-top: 117px;
  padding-left: 210px;
  padding-right: 400px;

}

.q-btn {
  font-size: 13px;
  font-weight: bold;

  /* Any other button styles */
}

.horizontal-menu {
  display: flex;
  flex-wrap: wrap;
  width: 990px;
  padding-top: 50px;
  padding-bottom:50px ;
  /* Any other horizontal menu styles */
}

.horizontal-menu-item {

  margin-bottom: 30px;
  text-align: center;
  /* Any other horizontal menu item styles */
}

.menu-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  /* Any other image styles */
}
</style>
