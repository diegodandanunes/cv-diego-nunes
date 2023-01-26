<script setup>
import { storeToRefs } from 'pinia';
import { useTeste } from '../stores/counter'
const teste = useTeste()
const { jobs } = storeToRefs(teste)
console.log(jobs.value)
</script>

<template>
  <div class="curriculum__wrapper card-width">
    <div class="curriculum__content is-flex">
      <slot name="sidebar"></slot>
      <slot name="about"></slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.curriculum__wrapper {
  min-height: 97vh;
  overflow-y: auto;
  background: rgb(240,240,240);
  background: linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 50%, rgba(208,208,208,1) 100%);
  -webkit-box-shadow: 10px 10px 11px -1px rgba(0,0,0,0.25);
  -moz-box-shadow: 10px 10px 11px -1px rgba(0,0,0,0.25);
  box-shadow: 10px 10px 11px -1px rgba(0,0,0,0.25);
}
</style>