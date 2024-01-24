<template>
  <q-page>
    <TheHeader></TheHeader>
    <div style="width: 100%; height: 2680px; background-color: #f1f1f1; padding-top: 25px; padding-bottom: 25px;">
    <div class="container">
      <div class="left-column">
        <div class="left-row" style="height: 192px;"></div>
        <div class="left-row" style="height: 466px;"></div>
        <div class="left-row" style="height: 367px;"></div>
        <div class="left-row" style="height: 175px;"></div>
        <div class="left-row" style="height: 285px;"></div>
        <div class="left-row" style="height: 900px;"></div>
        <div class="left-row" style="height: 97px;"></div>
      </div>
      <div class="right-box">
        <DetayliArama></DetayliArama>
      </div>
    </div>
  </div>

  <TheFooter ></TheFooter>

  </q-page>

</template>

<script setup>
import TheHeader from 'src/components/TheHeader.vue';
import DetayliArama from 'src/components/DetayliArama.vue';
import TheFooter from 'src/components/TheFooter.vue';
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1140px;
  margin: 0 auto;
  height: 600px;
  padding-bottom: 60px;
  border: 2px;
  border-color: black;
}

.left-column {
  display: flex;
  flex-direction: column;
}

.left-row {
  width: 255px;
  background-color:white;
  margin-bottom: 23px;
}

.right-box {
  width: 855px;
  height: 2625px;
  padding-bottom: 1800px;
  background-color: white;
}

.footer-container {
  margin-top: 20px; /* Footer ile arasına boşluk eklemek için ayarlayabilirsiniz */
}

</style>
