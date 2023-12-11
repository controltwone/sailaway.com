<template>
  <div class="header">
    <header-top />
    <header-middle />
    <header-bottom />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderTop from './TheHeaderTop.vue'; // Adjust path as necessary
import HeaderMiddle from './TheHeaderMiddle.vue'; // Adjust path as necessary
import HeaderBottom from './TheHeaderBottom.vue'; // Adjust path as necessary

export default defineComponent({
  name: 'TheHeader',
  components: {
    HeaderTop,
    HeaderMiddle,
    HeaderBottom
  }
});
</script>

<style scoped>
</style>
