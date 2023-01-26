<script setup>
import Title from '../components/Title.vue'
</script>

<template>
  <div class="curriculum-sidebar__wrapper  has-background-grey-darkest is-flex">
    <div class="curriculum-sidebar__image mt-3">
      <img src="../assets/images/diego.jpg" alt="Diego Nunes">
    </div>
    <div class="mt-5"></div>
    <div class="curriculum-sidebar__sections-wrapper">
      <Title :inverted="true" :title="'Educação'"></Title>
    </div>
  </div>
</template>

<style scoped lang="scss">
.curriculum-sidebar__wrapper {
  width: 35%;
  height: 97vh;
  align-items: center;
  flex-flow: column;
}

.curriculum-sidebar__image {
  width: 120px;
  height: 150px;

  img {
    width: 100%;
    border-radius: 50%;
    border: 1px solid white;
    padding: 10px;
  }
}

.curriculum-sidebar__sections-wrapper {
  width: 80%;
}
</style>