<template>
  <div class="footer" >
    <footer-top/>
    <footer-bottom style="margin-top:25px;"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterTop from './TheFooterTop.vue'; // Adjust path as necessary
import FooterBottom from './TheFooterBottom.vue'; // Adjust path as necessary

export default defineComponent({
  name: 'TheFooter',
  components: {
    FooterTop,
    FooterBottom
  }
});
</script>

<style scoped>
.footer{
  padding-top: 1000px;
}
</style>
