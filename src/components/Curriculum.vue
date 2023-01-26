<script setup>

</script>

<template>
  <div class="curriculum__wrapper has-background-white">
    <slot name="sidebar"></slot>
  </div>
</template>

<style scoped lang="scss">
.curriculum__wrapper {
  width: 70%;
  max-width: 500px;
  min-height: 90vh;
  overflow-y: auto;
}
</style>