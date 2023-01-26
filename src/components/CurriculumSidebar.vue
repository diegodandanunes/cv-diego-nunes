<script setup>

</script>

<template>
  <div class="curriculum-sidebar__wrapper has-background-dark-dark is-flex">
    <div class="curriculum-sidebar__image mt-3">
      <img src="../assets/images/diego.png" alt="Diego Nunes">
    </div>
    <div class="curriculum-sidebar__spacer"></div>
    <div class="curriculum-sidebar__sections-wrapper">
      <span style="color: white">...</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.curriculum-sidebar__wrapper {
  width: 35%;
  height: 90vh;
  align-items: center;
  flex-flow: column;
}

.curriculum-sidebar__image {
  width: 55%;

  img {
    width: 100%;
    border-radius: 50%;
    border: 1px solid white;
    padding: 10px;
  }
}
</style>