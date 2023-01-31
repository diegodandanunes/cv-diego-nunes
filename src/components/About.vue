<script setup>
import { storeToRefs } from "pinia";
import { useMainStore } from "../stores/main";
const mainStore = useMainStore();
const { email, city, phone } = storeToRefs(mainStore);
</script>

<template>
  <div
    class="
      about__wrapper
      card-width
      justify-center
      cv-main-color-bg
      is-flex
      align-center
    "
  >
    <div class="about__content is-flex justify-center">
      <div class="about__phone">
        <i class="fa fa-phone mr-1" aria-hidden="true"></i> {{ phone }}
      </div>
      <div class="about__email">
        <i class="fa fa-envelope mr-1"></i> {{ email }}
      </div>
      <div class="about__address">
        <i class="fa fa-home mr-1"></i>{{ city }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  &__wrapper {
    height: 50px;
    position: absolute;
    top: 190px;
    overflow: hidden;
    gap: 12px;
  }

  &__content {
    width: 80%;
    gap: 16px;
  }
}
</style>