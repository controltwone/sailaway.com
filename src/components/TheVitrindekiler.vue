<template>
  <div class="q-pa-md">

    <div class="row q-gutter-md">
      <h2 class="vitrindekiler-title">Vitrindekiler</h2>
      <div
        class="col-md-3"
        v-for="(product, index) in products"
        :key="index"
        @mouseenter="showButtons(index)"
        @mouseleave="hideButtons(index)"
      >
        <q-card class="card-with-buttons">
          <q-img
            :src="product.imageUrl"
            :alt="product.name"
            basic
            transition="fade"
          />
          <q-card-section>
            <div style="margin-bottom:10px; font-weight: 750;">
              <q-card-main>
              {{ product.name}}
              </q-card-main>
            </div>
            <div style="margin-bottom:10px ;">
              <q-card-main>
              {{ product.description}}
              </q-card-main>
            </div>
            <q-card-title style="margin-bottom:10px; font-weight: 750;">{{ product.price}}</q-card-title>

          </q-card-section>
          <q-card-actions v-if="product.showButtons" class="buttons">
            <q-btn label="  İncele  " color="black" @click="showProductDetails(product)" />
            <q-btn label="Sepete Ekle" color="blue" @click="addToCart(product)" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  {
    name:  'HOBIE',
    description: 'HOBIE MIRAGE TANDEM',
    price: '465.040,17 TL',
    imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/products/541/hobie-sailaway-mirage-itrek-fiesta-kano-kayak-kayaking-new-4kisi-pedalli-pedal_min.png?revision=1697143329',
    showButtons: false,
  },
  {
    name:  'HOBIE',
    description: 'HOBIE MIRAGE COMPASS DUO',
    price: '196.942,32 TL',
    imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/products/545/hobie-mirage-eclipse-inflatable-board-sailaway-2021-pedalboard_min.png?revision=1697143329',
    showButtons: false,
  },
  {
    name: 'TAHE MARİNE',
    description: 'TAHE MARINE TECHNO 293 OD',
    price: '67.277,39 TL',
    imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/products/024/waikiki-expedition-sailaway-tahemarine-kano-kayak-kayaking_min.jpg?revision=1697143329',
    showButtons: false,
  },
  {
    name:  'HOBIE',
    description: 'HOBIE MIRAGE OASIS',
    price: '255.788,95 TL',
    imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/products/544/hobie-itrek-ultralight-9-sailaway-pedalli-sisme-kano-kayak-kayaking-mirage-sari_min.png?revision=1697143329',
    showButtons: false,
  },
]);


const showButtons = (index) => {
  products.value[index].showButtons = true;
};

const hideButtons = (index) => {
  products.value[index].showButtons = false;
};
</script>

<style scoped>
.row.q-gutter-md {
  margin: 280px; /* Margin sıfırlama */

  display: flex; /* Kartları yatay olarak sırala */
  flex-wrap: wrap; /* Kartlar sığmazsa alt satıra geç */
  justify-content: space-between; /* Kartları boşluk bırakarak sırala */
}

.col-md-3 {
  padding: 2px; /* Kartların etrafındaki boşluğu belirleme */
  flex: 0 0 calc(25% - 16px); /* Kartların genişliğini ayarla (4 kart yan yana sığsın) */
  max-width: calc(25% - 16px); /* Kartların maksimum genişliğini ayarla */
  box-sizing: border-box; /* Kartın içeriği kutunun içine sığsın */
}

.card-with-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.buttons {
  margin-bottom: 60px;
  border-top: 1px solid #ddd;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  width: 100%;
  position: absolute;
  top: 70%; /* Kartın ortasında olacak */
  transform: translateY(-50%); /* Dikey olarak ortala */
  display: flex;
  flex-direction: column; /* Butonları üst üste sırala */
  align-items: center; /* Butonları ortala */
}

.buttons q-btn {
  margin-bottom: 9px;
}

.card-with-buttons:hover .buttons {
  opacity: 1;
  margin-bottom: 9px;
  pointer-events: auto;
}
.vitrindekiler-title {
  text-align: start;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: -3px;
  width: 100%;
}
</style>
