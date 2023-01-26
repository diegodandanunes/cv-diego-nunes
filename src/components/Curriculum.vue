<script setup>

</script>

<template>
  <div class="curriculum__wrapper card-width">
    <div class="curriculum__content is-flex">
      <slot name="sidebar"></slot>
      <!-- <slot name="about"></slot> -->
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.curriculum__wrapper {
  min-height: 90vh;
  overflow-y: auto;
  background: rgb(240,240,240);
  background: linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 50%, rgba(208,208,208,1) 100%);
}
</style>