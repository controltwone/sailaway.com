<template>
  <div class="q-pa-md">
    <div class="row" style="margin: 188px;">
      <div class="col-md-8" style="padding-right: 30px;">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          height="730px"
          width="730px"
          :autoplay="true"
          :autoplay-interval="200"
        >
          <q-carousel-slide :name="1" img-src="https://ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/slider_3.jpg?revision=7.2.7.2-1-1689759519" />
          <q-carousel-slide :name="2" img-src="https://ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/slider_8.jpg?revision=7.2.7.2-1-1689759519" />
          <q-carousel-slide :name="3" img-src="https://ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/slider_1.jpg?revision=7.2.7.2-1-1689759519" />
          <q-carousel-slide :name="4" img-src="https://ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/slider_2.jpg?revision=7.2.7.2-1-1689759519" />
          <q-carousel-slide :name="5" img-src="https://ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/slider_5.jpg?revision=7.2.7.2-1-1689759519" />
          <q-carousel-slide :name="6" img-src="https://ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/slider_4.jpg?revision=7.2.7.2-1-1689759519" />
        </q-carousel>
      </div>
      <div class="col-md-4"><a href="/urun/example-product-2#/TheCarusel">
        <!-- 3 resmi yukarıdan aşağıya doğru sıralamak için bu sütunu kullanabilirsiniz -->
        <div class="row" style="margin-bottom: 36px;">
          <div class="col-md-12">
            <q-carousel-slide :name="1" style="height: 160px; width: 350px;" img-src="https://ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/banner_img_1.jpg?revision=7.2.7.2-1-1689759519" />
          </div>
        </div>
        <div class="row" style="margin-bottom: 36px;">
          <div class="col-md-12">
            <q-carousel-slide :name="2" style="height: 352px; width: 350px;" img-src="https://ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/banner_img_2.jpg?revision=7.2.7.2-1-1689759519" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <q-carousel-slide :name="3" style="height: 146px; width: 350px;" img-src="https://ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/banner_img_3.jpg?revision=7.2.7.2-1-1689759519" />
          </div>
        </div></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
</script>
