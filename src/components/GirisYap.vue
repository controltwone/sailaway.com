<template>
  <div class="container">
  <div class="contentbox-body">
    <q-card class="user-login-box">
      <q-card-section class="user-login-box-header">
        <q-icon name="person" style="font-size: 100px;" />
        <div style="font-size: 20px;">Üye Girişi</div>
      </q-card-section>

      <q-card-section class="user-login-box-content">
        <q-form @submit="onSubmit" novalidate>
          <q-input filled v-model="email" label="Email" type="email" placeholder="Email">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input filled v-model="password" label="Şifre" type="password" placeholder="Şifre">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>

          <div class="row items-center q-mt-md q-mb-md">
            <q-checkbox v-model="rememberMe" label="Beni Hatırla" style="font-size: smaller;" class="col-6" />
            <q-card-section  style="font-size: smaller; margin-left: 100px;"> <a href="#/GirisYap">Şifremi Unuttum</a></q-card-section>
          </div>

          <q-btn style="width:100%;" label="GİRİŞ YAP" type="submit" color="primary" block />

          <div class="row q-mt-md">
            <q-btn style="margin-right: 10px; text-transform: none;" label="Facebook İle Bağlan" icon="fab fa-facebook-f" color="blue" class="col" />
            <q-btn style="text-transform: none;" label="Google İle Bağlan" icon="fab fa-google" color="red" class="col" />
          </div>
        </q-form>
      </q-card-section>

      <q-card-section class="user-login-box-footer">
        <q-card-section  style="font-size: smaller; margin-left: 210px;">Hesabınız yoksa üye olmak için <a href="#/GirisYap">Tıklayınız.</a> </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</div>
<link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet">

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginComponent',
  setup() {
    const email = ref('');
    const password = ref('');
    const rememberMe = ref(false);

    const onSubmit = () => {
      console.log('Form submitted:', { email: email.value, password: password.value, rememberMe: rememberMe.value });
      // Implement your login logic here
    };

    return { email, password, rememberMe, onSubmit };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Makes the container fill the entire viewport height */
}
.user-login-box {
  max-width: 500px;
  margin: auto;
}

.user-login-box-header {
  text-align: center;
}

/* Add additional styling as needed */
</style>
