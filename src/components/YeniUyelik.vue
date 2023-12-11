<template>

  <div class="form-container">
    <q-form @submit="onSubmit" @reset="onReset" class="signup-form">
      <div class="form-group">
        <label for="firstname">Adı</label>
        <q-input filled id="firstname" v-model="user.firstname" :rules="[val => !!val || 'Lütfen Adı giriniz.']"/>
      </div>

      <div class="form-group">
        <label for="surname">Soyadı</label>
        <q-input filled id="surname" v-model="user.surname" :rules="[val => !!val || 'Lütfen Soyadı giriniz.']"/>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <q-input type="email" filled id="email" v-model="user.email" :rules="[val => !!val || 'Lütfen Email giriniz.']"/>
      </div>

      <div class="form-group">
        <label for="password">Şifre</label>
        <q-input type="password" filled id="password" v-model="user.password" :rules="[val => !!val || 'Lütfen Şifre giriniz.']"/>
      </div>

      <div class="form-group gender-section">
        <label>Cinsiyet</label>
        <div class="gender-options">
          <q-radio v-model="user.gender" val="male" label="Erkek"/>
          <q-radio v-model="user.gender" val="female" label="Kadın"/>
          <q-radio v-model="user.gender" val="unspecified" label="Belirtmek istemiyorum"/>
        </div>
      </div>

      <div class="form-group">
        <label for="cell">Cep Telefonu</label>
        <q-input type="tel" filled id="cell" v-model="user.cell" mask="(###) ### ## ##" placeholder="(5XX) XXX XX XX" :rules="[val => !!val || 'Lütfen Cep Telefonu giriniz.']"/>
      </div>

      <q-checkbox v-model="user.campaignStatus" label="Aydınlatma Metninde belirtilen ilkeler nezdinde Elektronik Ticaret İletisi almak istiyorum." class="form-checkbox"/>
      <q-checkbox v-model="user.agreement" style="text-decoration:underline;"  label="Üyelik sözleşmesini kabul ediyorum." class="form-checkbox"/>
      <q-checkbox v-model="user.personalDataAgreement" style="text-decoration:underline;" label="Kişisel verilerin işlenmesine ilişkin Aydınlatma Metnini okudum." class="form-checkbox"/>

      <div class="form-buttons">
        <q-btn label="İptal" style="margin-right: 5px;" type="reset" color="grey" class="cancel-button"/>
        <q-btn label="Kaydet" type="submit" color="primary" class="submit-button"/>

      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignUpForm',
  data() {
    return {
      user: {
        firstname: '',
        surname: '',
        email: '',
        password: '',
        gender: '',
        cell: '',
        campaignStatus: false,
        agreement: false,
        personalDataAgreement: false
      }
    }
  },
  methods: {
    onSubmit() {
      // Form submission logic
    },
    onReset() {
      // Reset form logic
    }
  }
})
</script>

<style scoped>
.form-checkbox{
  margin-left: 520px;
  margin-bottom: 10px;
}
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-weight: 300;
}

.signup-form {
  width: 100%;
  max-width: 1500px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin: 388px;
  font-weight: 300;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-weight: 300;

}

.form-group label {
  min-width: 300px;
  margin-right: 225px;
  font-weight: 300;

}

.gender-section {
  align-items: start;
}

.gender-section .gender-options {
  display: flex;
  justify-content: start;
  gap: 20px;
  font-weight: 300;
}

.form-buttons {
  display: flex;
  justify-content: flex-end;
}

/* Additional styling as needed */
</style>
