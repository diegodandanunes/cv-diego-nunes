<script setup>
const props = defineProps({
  inverted: Boolean,
  title: String,
});
</script>

<template>
  <div
    class="title__border"
    :class="{ 'has-background-white': props.inverted }"
  ></div>
  <h3
    class="title__text bebas-spacing mb-1"
    :class="{ 'cv-main-color-text': props.inverted }"
  >
    {{ props.title }}
  </h3>
</template>

<style scoped lang="scss">
.title {
  &__text {
    text-transform: uppercase;
    font-family: "Bebas Neue", cursive;
    font-size: 1.5rem;
  }

  &__border {
    height: 3px;
    background-color: #393946;
    width: 30px;
  }
}
</style>