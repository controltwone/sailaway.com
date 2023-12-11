  <template>
    <div class="footer-menu">
      <div class="flex-container">
        <!-- First List -->
        <q-list bordered class="rounded-borders list-item">
          <q-item-label style=" font-weight: 700; font-size:15px" header>KURUMSAL</q-item-label>
          <q-item >
            <q-item-section>Hakkımızda</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>Blog</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>İletişim</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>İletişim Formu</q-item-section>
          </q-item>
        </q-list>

        <q-list bordered class="rounded-borders list-item">
          <q-item-label style=" font-weight: 700; font-size:15px" header>YARDIM</q-item-label>
          <q-item >
            <q-item-section>Kargo Takibi</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>Havale Bildirim Formu</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>Mesafeli Satış Sözleşmesi</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>Gizlilik ve Güvenlik</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>İptal ve İade Şartları</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>Kişisel Veriler Politikası</q-item-section>
          </q-item>
        </q-list>

        <q-list bordered class="rounded-borders list-item">
          <q-item-label style=" font-weight: 700; font-size:15px" header>ÜYELİK</q-item-label>
          <q-item >
            <q-item-section>Yeni Üyelik</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>Üye Girişi</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>Şifremi Unuttum</q-item-section>
          </q-item>
          <q-item >
            <q-item-section>Sepetiniz</q-item-section>
          </q-item>
        </q-list>

        <q-list bordered class="rounded-borders list-item">
          <q-item-label style=" font-weight: 700; font-size:15px" header>BİZİ TAKİP EDİN</q-item-label>
          <q-item >
            <q-icon name="fab fa-facebook-square" left style="font-size: 30px;"/>
            <q-item-section>Facebook</q-item-section>
          </q-item>
          <q-item >
            <q-icon name="fab fa-instagram-square" left style="font-size: 30px;"/>
            <q-item-section>Instagram</q-item-section>
          </q-item>
          <q-item >
            <q-icon name="fab fa-youtube-square" left style="font-size: 30px;"/>
            <q-item-section>Youtube</q-item-section>
          </q-item>
        </q-list>

        <q-list bordered class="rounded-borders list-item">
          <q-item-label style=" font-weight: 700; font-size:15px" header>E-Bültene Kayıt Ol!</q-item-label>
          <q-item >
            <q-item-section>Fırsatları, kampanya ve duyuruları ile ilgili e-posta almak ister misiniz?</q-item-section>
          </q-item>
          <q-form class="row q-gutter-md" @submit="onSubmit">
    <!-- E-posta giriş alanı ve buton aynı satırda yan yana olacak -->
          <div class="col">
           <q-input style="margin-left: 13px;" filled v-model="email" type="email" placeholder="E-posta adresinizi yazınız." />
         </div>
         <div class="col-auto">
           <q-btn style="margin-right: 20px; padding-top:15px; padding-bottom: 15px;" label="Ekle" type="submit" color="primary" />
         </div>
          </q-form>
        </q-list>
      </div>
      <hr>
    </div>
    <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet">
  </template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CombinedComponent',

  setup() {
    // NewsletterSignup için setup
    const email = ref('');

    function onSubmit() {
      // Burada e-posta adresini işleyin
      console.log('E-posta adresi: ', email.value);
    }

    // FooterMenu için setup
    // Eğer FooterMenu'nun özel bir setup'ı varsa, burada entegre edilir.

    return { email, onSubmit };
  },
});
</script>

  <style scoped>
  .footer-menu {
    padding-left: 330px;
    padding-right: 330px;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping if the screen is too small */
    gap: 5px; /* Optional: space between the lists */
  }

  .list-item {
    flex: 1; /* Each list takes equal width */
     /* Minimum width for each list */
  }

  .rounded-borders {
    border-radius: 10px;
    border: 0;
  }

  .q-item {
    cursor: pointer;
    font-weight: 100px;/* Change cursor to indicate clickable area */
  }


  .q-item-section {
    color: inherit; /* Inherits text color */
    text-decoration: none; /* Removes underline from links */
  }


  </style>
