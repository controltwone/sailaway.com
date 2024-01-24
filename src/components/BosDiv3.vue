<template>
  <div class="flex-container">
  <div class="flex-item"></div>
  <div class="flex-item"></div>
  <div class="flex-item"></div>
</div>
</template>

<script lang="ts">

</script>

<style scoped>
 .flex-container {
  display: flex;
  justify-content: space-between; /* Kareler arasında boşluk bırakır */
  margin-right: 304px;
  margin-left: 220px;
  margin-bottom: 30px;
  margin-top: 30px;
  height: 350px;

}

.flex-item {
  width: calc(33.33% - 20px); /* Eşit genişlikte kareler, 10px boşluk bırakır */
  background-color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;

}
</style>
