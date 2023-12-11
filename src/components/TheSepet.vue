<template>
  <div class="form-container">
  <div class="q-pa-md example-row-column-width">

<div class="row" style=" margin-left: 280px;">
  <div class="col-6">
<q-card-section class="cart-container">
    <div class="cart-content">
      <div class="contentbox-header">
        <h4>SEPET DETAYI</h4>
      </div>
      <div class="contentbox-body">
        <div v-for="item in cartItems" :key="item.id" class="cart-item row q-my-md">
          <div class="col-4 col-lg-2">
            <div class="cart-item-image">
              <q-img :src="item.imageUrl" :alt="item.name" />
            </div>
          </div>
          <div class="col-8 col-lg-10">
            <div class="cart-item-detail row">
              <div class="col-12 col-lg-6">
                <div class="cart-item-name">
                  <a :href="item.url">{{ item.name }}</a>
                  <q-btn flat icon="delete" color="black" @click="removeItem(item.id)" label="Sepetten Sil" style="font-size: smaller; font-weight: 300; margin: 30px;" class="cart-item-delete" />
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="cart-item-quantity">
                  <q-input v-model="item.quantity" type="number" min="1" />
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="cart-item-price-container">
                  <div class="cart-item-price">
                    <div class="item-rebate-price">{{ item.price }}</div>
                    <div class="item-tax">+ KDV % 20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-buttons">
          <q-btn color="grey" text-color="black"  label="ALIŞVERİŞE DEVAM ET" />
        </div>
      </div>
    </div>
  </q-card-section>
  </div>
  <div class="col-3">

    <q-card-section class="contentbox-header">
      <h4>SEPET ÖZETİ</h4>
    </q-card-section>
    <q-card-section class="contentbox-body">
      <div class="cart-summary">
        <div class="cart-panel-row">
          <span>Ara Toplam</span>
          <span style="font-weight: 700; font-size: medium;">{{ subtotalFormatted }}</span>
        </div>
        <div class="cart-panel-row">
          <span>KDV</span>
          <span style="font-weight: 700; font-size: medium;">{{ taxFormatted }}</span>
        </div>
        <div class="cart-panel-row">
          <span>KDV Dahil</span>
          <span style="font-weight: 700; font-size: medium;">{{ totalFormatted }}</span>
        </div>
        <div  style="border-top: 0,2px solid #000000; " class="cart-panel-row">
          <span>Toplam</span>
          <span style="font-weight: 700; font-size: medium;">{{ totalFormatted }}</span>
        </div>
        <q-btn class="full-width" color="primary" label="ALIŞVERİŞİ TAMAMLA"  />
      </div>
    </q-card-section>

  </div>

</div>



</div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'CartAndCoupon',
  setup() {
    // Sample cart items
    const cartItems = ref([
      {
        id: 1,
        name: 'HOBIE MIRAGE iTREK 9 ULTRALIGHT ŞİŞME PEDALLI KANO',
        price: '121.402,80 TL',
        quantity: 1,
        imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/products/544/hobie-itrek-ultralight-9-sailaway-pedalli-sisme-kano-kayak-kayaking-mirage-sari_min.png?rev=1697143329',
        url: '/urun/example-product-2#/comp2'
      },
      {
        id: 2,
        name: 'TAHE MARINE BREEZE FULL HP1',
        price: '41.872,73 TL',
        quantity: 2,
        imageUrl: 'https://ideacdn.net/idea/hh/66/myassets/products/109/tahe-marine-kayak-breeze-fullhp1-sailaway-tr-kano-sisme_min.jpg?rev=1697143329',
        url: '/urun/example-product-2#/comp2'
      }
      // Add more items as needed
    ]);

    // Compute subtotal, tax, and total based on cartItems
    const subtotal = computed(() =>
      cartItems.value.reduce((total, item) => total + parseFloat(item.price.replace(' TL', '').replace(',', '.')) * item.quantity, 0)
    );
    const taxRate = 0.20; // Example tax rate
    const tax = computed(() => subtotal.value * taxRate);
    const total = computed(() => subtotal.value + tax.value);

    const subtotalFormatted = computed(() => `${subtotal.value.toFixed(2)} TL`);
    const taxFormatted = computed(() => `${tax.value.toFixed(2)} TL`);
    const totalFormatted = computed(() => `${total.value.toFixed(2)} TL`);

    function removeItem(itemId: number) {
      const index = cartItems.value.findIndex(item => item.id === itemId);
      if (index !== -1) {
        cartItems.value.splice(index, 1);
      }
    }

    // Coupon code logic
    const useCoupon = ref(false);
    const couponCode = ref('');

    function applyCoupon() {
      // Implement the logic to apply the coupon
      console.log(`Applying coupon: ${couponCode.value}`);
      // Add additional logic as needed
    }

    return {
      cartItems,
      subtotalFormatted,
      taxFormatted,
      totalFormatted,
      removeItem,
      useCoupon,
      couponCode,
      applyCoupon
    };
  },
});
</script>


<style scoped>
.form-container {
  font-size: 11px;
  font-weight: 300;
  padding-bottom: 100px;
  padding-top: 200px;

}
.cart-panel {
  border: 22px ;
  border-color: #000;
}
.cart-panel-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: small;
}
.q-pa-md example-row-column-width{
  background-color: #F1F1F1;
}

.full-width {
  width: 100%;
}
.cart-container {
  background-color: white;
  margin: auto;
  padding: 20px;

}

.contentbox-header h4 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.cart-item {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.cart-item-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: "10px";
}

.cart-item-image q-img {
  max-width: 100%;
  max-height: 120px;
  border-radius: 5px;
}

.cart-item-detail {
  align-items: center;
}

.cart-item-name {
  font-size: 12px;
  font-weight: 350;
  color: #000;

}

.cart-item-delete {
  margin-top: 70px;

  font-size: 0.8rem;
}

.cart-item-quantity .q-input {
  width: 100px;
  display: inline-block;
}

.cart-item-price-container {
  text-align: right;
}

.cart-item-price {
  font-size: 1rem;
  color: #000;
}

.cart-buttons {
  text-align: left;
  margin-top: 20px;
  color: silver;
}

.q-btn {
  font-weight:bolder;
}
example-row-column-width .row > div {
  padding: 10px 15px;
  background: rgba(153, 153, 153, 0.15);
  border: 10px solid rgba(153, 153, 153, 0.2);
  justify-content: center;
}

.example-row-column-width .row + .row {
  margin-top: 1rem;

}
</style>
