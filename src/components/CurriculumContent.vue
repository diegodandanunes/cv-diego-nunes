<script setup>
import Title from '../components/Title.vue'
</script>

<template>
<div class="curriculum-content__wrapper mt-4 ml-3">
  <div class="curriculum-content__name-wrapper">
    <div class="curriculum-content__name title is-1 m-0">Diego Nunes</div>
    <div class="curriculum-content__position has-text-caption">Front End Developer</div>
  </div>
  <div class="mt-5"></div>
  <Title title="Profile" />
</div>
</template>

<style scoped lang="scss">
.curriculum-content__name-wrapper {
  height: 150px;
}

.curriculum-content__name {
  font-family: 'Bebas Neue', cursive;
  text-transform: uppercase;
  font-size: 4rem;
}

.curriculum-content__position {
  // font-family: 'Bebas Neue', cursive;
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: bold;
  margin-top: -12px;
}
</style>