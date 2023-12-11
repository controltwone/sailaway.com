<template>
  <div class="full-height flex-center">
    <q-page class="q-col-gutter-md container">
      <q-form @submit.prevent="onSubmit">
        <!-- Anahtar Kelime -->
        <div class="row items-center q-gutter-sm q-mb-md">
          <div class="col-auto">
            <div class="form-label">Anahtar Kelime</div>
          </div>
          <div class="col">
            <q-input filled v-model="searchForm.keyword" />
          </div>
        </div>

        <!-- Kategoriler -->
        <div class="row items-center q-gutter-sm q-mb-md">
          <div class="col-auto">
            <div class="form-label">Kategoriler</div>
          </div>
          <div class="col" style="margin-left: 30px;">
            <q-select filled v-model="searchForm.category" :options="categories" />
          </div>
        </div>

        <!-- Markalar -->
        <div class="row items-center q-gutter-sm q-mb-md">
          <div class="col-auto">
            <div class="form-label">Markalar</div>
          </div>
          <div class="col" style="margin-left: 40px;">
            <q-select filled v-model="searchForm.brand" :options="brands" />
          </div>
        </div>

        <!-- Stok Kodu -->
        <div class="row items-center q-gutter-sm q-mb-md">
          <div class="col-auto">
            <div class="form-label">Stok Kodu</div>
          </div>
          <div class="col" style="margin-left: 32px;">
            <q-input filled v-model="searchForm.stockCode" />
          </div>
        </div>

        <!-- Fiyat Aralığı -->
        <div class="row items-center q-gutter-sm q-mb-md">
          <div class="col-auto">
            <div class="form-label" style="padding-right: 16px;">Fiyat Aralığı</div>
          </div>
          <div class="col" style="margin-right: 10px;">
            <q-input filled v-model="searchForm.minPrice" type="number" placeholder="Min" />
          </div>

          <div class="col">
            <q-input filled v-model="searchForm.maxPrice" type="number" placeholder="Max" />
          </div>
          <div class="col-auto">
            <div class="form-label">TL Arası</div>
          </div>
        </div>

        <q-btn style="padding-right: 30px; margin-left: 188px;" label="Ara" type="submit" color="primary" class="q-mt-md" />
      </q-form>
      <div id="sorting-options" class="sorting-options-content openbox-content" style="margin-top: 50px;">
        <form class="form-horizontal" id="sorting-options-form" action="" method="GET">
          <div class="row">
            <div class="col-6 col-lg-auto">
              <div class="checkbox-custom mt-3 mb-3">
                <input type="checkbox" value="1" id="stockOnly" name="stockOnly" data-selector="sorting-option">
                <label for="stockOnly" style="font-size: 12px; margin-left: 8px;">Stoktakiler</label>
              </div>
            </div>
            <div class="col-6 col-lg">
              <div class="record-count text-right mt-3 mb-3" style="margin-right: 30px; font-size: 12px;">
                Toplam  ürün
              </div>
            </div>
            <div class="col-6 col-lg-auto">
              <label for="sortingOption" class="mb-0 d-block">
                <select class="form-control" name="sort" id="sortingOption" data-selector="sorting-option">
                  <option value="">Önerilen sıralama</option>
                  <option value="price-asc"> En düşük fiyat </option>
                  <option value="price-desc"> En yüksek fiyat </option>
                  <option value="comment-count"> Çok değerlendirilenler </option>
                  <option value="rank"> Yüksek puanlılar </option>
                  <option value="discount"> İndirim oranı </option>
                  <option value="new"> Yeni eklenenler </option>
                </select>
              </label>
            </div>
          </div>
        </form>
      </div>
      <!-- Information Content -->
    <div class="information-content" style="margin-left: 150px; margin-top: 50px;">
      <i class="fas fa-clipboard-list fa-4x" style="margin-left: 85px; margin-bottom: 30px;"></i>
      <div>
        <span style="font-size: 12px;">
          Arama kriterleri en az 2 karakter olmalıdır.
        </span>
      </div>
    </div>
    </q-page>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css'
export default defineComponent({
  name: 'DetailedSearch',
  setup() {
    const searchForm = ref({
      keyword: '',
      category: null,
      brand: null,
      stockCode: '',
      minPrice: null,
      maxPrice: null
    });

    const categories = ref([
    { label: 'Tümü', value: null },
      { label: 'BAKIM SERVİSİ', value: 'bakim-servisi' },
      { label: 'DONANIMLAR', value: 'donanimlar' },
      { label: 'KANOLAR', value: 'kanolar' },
      { label: 'KİRALAMA', value: 'kiralama' },
      { label: 'PEDALBOARD', value: 'pedalboard' },
      { label: 'PLATFORM', value: 'platform' },
      { label: 'RÜZGAR SÖRFÜ - FOIL', value: 'ruzgar-sorfu-foil' },
      { label: 'SU SPORLARI', value: 'su-sporlari' },
      { label: 'SUP-KÜREK SÖRFÜ', value: 'sup-kurek-sorfu' },
      { label: 'WATER JET SYSTEMS & E-FOIL', value: 'water-jet-systems-e-foil' },
      { label: 'YELKEN', value: 'yelken' },
      // Diğer kategoriler
    ]);

    const brands = ref([
      { label: 'Tümü', value: null },
      { label: 'TAHE MARINE', value: 'tahe-marine' },
      { label: 'HOBIE', value: 'hobie' },
      { label: 'BICSPORT', value: 'bicsport' },
      { label: 'STX', value: 'stx' },
      { label: 'SIC', value: 'sic' },
      { label: 'TIKI', value: 'tiki' },
      { label: 'PROLIMIT', value: 'prolimit' },
      { label: 'TOPCAT', value: 'topcat' },
      { label: 'RONIX', value: 'ronix' },
      { label: 'LAMPUGA', value: 'lampuga' },
      { label: 'SCUBA JET', value: 'scuba-jet' },
      { label: 'AUDI', value: 'audi' },
      { label: 'SEABOB', value: 'seabob' },
      // Diğer markalar
    ]);

    const onSubmit = () => {
      console.log('Arama Yapılıyor:', searchForm.value);
      // Arama işlemleri burada gerçekleştirilecek
    };

    return { searchForm, categories, brands, onSubmit };
  }
});
</script>

<style scoped>
.full-height {
  height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container {
  max-width: 600px;
  width: 100%;
  margin-top: 200px;
}
.col {
  margin-right: 80px;
}

.form-label {
  font-size: 12px;
  margin-right: 100px;
}
</style>
