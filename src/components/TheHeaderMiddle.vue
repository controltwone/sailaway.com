<template>
  <div class="container">
    <q-row class="header-middle-row">
      <!-- Logo Section -->
      <q-col class="col-auto logo-section">
        <router-link to="/TheHeader" aria-label="Logo">
          <img src="//ideacdn.net/idea/hh/66/themes/selftpl_60013d0e60bb3/assets/uploads/logo.png?revision=1689759519" class="logo-img">
        </router-link>
      </q-col>

      <!-- Search Bar -->
      <q-col flex-grow="1" class="search-section">
        <q-input v-model="searchQuery" filled placeholder="Aramak istediğiniz kelimeyi yazınız" aria-label="Search" class="search-input" />
        <q-btn flat icon="fas fa-search" @click="onSearch" class="search-btn" />
      </q-col>

      <!-- User Menu -->
      <q-col class="col-auto menu-section">
        <q-item-label clickable tag="a" to="/YeniUyelik" class="user-menu-link" style="margin-top: 6px; font-weight: 600;">Üye Ol    /</q-item-label>
        <q-item-label clickable tag="a" to="/uye-girisi" class="user-menu-link">Giriş Yap</q-item-label>
      </q-col>

      <!-- Cart Menu -->
      <q-col class="col-auto cart-section">
        <q-btn color="grey" class="cart-btn">
          <q-icon style="margin-right: 15px;font-size: 20px;" name="fas fa-shopping-cart" /> <!-- Cart Icon -->
          <span class="cart-title">Sepetim</span>
        </q-btn>
      </q-col>
    </q-row>
  </div>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HeaderMiddleComponent',
  setup() {
    const searchQuery = ref('');

    function onSearch() {
      console.log('Searching for:', searchQuery.value);
      // Implement search functionality
    }

    return { searchQuery, onSearch };
  }
});
</script>

<style scoped>
.container {
  align-items: end;
  margin-left: 220px;
  margin-right: 410px;
  max-height: 13px;
}

.header-middle-row {
  display: flex;
  align-items: center;
  justify-content: start;
}

.search-section {
  display: flex;
  align-items: center;
  padding-top: 22px;
  padding-left: 100px;
  padding-right: 100px;
  font-weight: 300;
  flex-grow: 1; /* Allows the search section to expand */
}

.search-section .search-input {
  width: 90%; /* Full width within its column */
}

.logo-section, .menu-section, .cart-section {
  display: flex;
  align-items: center;
  margin-top: 22px;
}

.logo-img {
  max-width: 52px; /* Adjust the width as needed */
  height: auto;
  padding: -10px;
}

.cart-btn {
  display: flex;
  align-items: center;
  margin-left: 55px;
}

.cart-title {
  margin-left: 5px; /* Spacing between cart icon and text */
  text-transform: none;
}

.user-menu-link {
  margin-left: 10px;
  color: inherit;
  text-decoration: none;
}

.user-menu-link:hover {
  color: blue; /* Color changes to blue on hover */
}

/* Additional styles as needed */
</style>
