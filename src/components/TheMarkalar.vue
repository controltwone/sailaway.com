<template>
  <div id="q-app" style="min-height: 100vh; background-color: white;">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 1110px; margin-top: 400px; margin-left: 230px; padding: 30px;">
        <h2 style="text-align:start; margin-bottom: 10px; font-size:18px; font-weight: bold;">MARKALAR</h2>
        <hr>
        <q-tabs
          v-model="tab"
          inline-label
          outside-arrows
          mobile-arrows
          class="bg-white text-white shadow-2"
        >
          <q-tab
            v-for="brand in brands"
            :key="brand.id"
            :name="brand.name"
            class="brand-tab"
          >
            <img :src="brand.logoUrl" :alt="brand.name" class="brand-logo">
          </q-tab>
        </q-tabs>

        <!-- İçerikler burada yer alabilir -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Brand {
    id: number;
    name: string;
    logoUrl: string;
}

export default defineComponent({
  name: 'BrandsTabs',
  setup() {
    const brands: Brand[] = [
      { id: 4, name: 'Topcat', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/23/sailaway-topcat-sailing-logo-katamaran.jpg?revision=1641465796' },
      { id: 5, name: 'Tiki Trading', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/24/sailaway-tiki-trading-windsurf-sails-boom-masts.png?revision=1645714761' },
      { id: 6, name: 'Ronix', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/25/sailaway-ronix-wakeboard-binding-watersports.png?revision=1652108993' },
      { id: 7, name: 'Scuba Jet', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/27/sailaway-scuba-jet-scubajet-logo.png?revision=1678518386' },
      { id: 8, name: 'Audi', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/29/sailaway-audi-aerofoils-logo-audi-e-foil-electric-foil.png?revision=1683638625' },
      { id: 9, name: 'Seabob', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/30/sailaway-seabob-logo-full.png?revision=1683907449' },
      { id: 10, name: 'Egalis', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/20/egalis_2.png?revision=1608622709' },
      { id: 1, name: 'Prolimit', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/13/logo.png?revision=1611049847' },
      { id: 2, name: 'SIC Maui', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/17/SIC-Maui-Logo.png?revision=1609591061' },
      { id: 3, name: 'Zegul', logoUrl: 'https://ideacdn.net/idea/hh/66/myassets/brands/22/zegul_by_tahe.png?revision=1611125888' },
    ];

    const tab = ref(brands[0].name); // İlk markanın adı başlangıçta seçili olacak

    return { tab, brands };
  }
});
</script>

<style scoped>
.brand-tab .q-tab__content {
  justify-content: center;
}

.brand-logo {
  height: 60px; /* Logoların boyutu */
  width: auto;
  padding-top:10px;
  padding-bottom: 10px;
}

.q-tabs {
  background-color: white;
  margin-top: 40px; /* Sekmelerin arkaplanı beyaz */
}
</style>
