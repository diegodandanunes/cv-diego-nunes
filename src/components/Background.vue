<script setup>
</script>

<template>
<div class="background__wrapper">
  <div class="background__slot-wrapper is-flex justify-center align-center">
    <slot></slot>
  </div>
</div>
</template>

<style scoped lang="scss">
.background__wrapper {
  min-height: 100vh;
  width: 100%;
  background-image: url('../assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.background__slot-wrapper {
  min-height: 100vh;
}
</style>
