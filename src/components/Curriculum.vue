<script setup>
import { ref } from 'vue';

let height = ref(0)

addEventListener("scroll", (event) => {});

onscroll = (event) => {
  // console.log(event)
  console.clear()
  // let teste = document.getElementsByTagName('body')[0].clientHeight
  // console.log(teste)
  // console.log(window.scrollY)

  height.value = window.scrollY;

  console.log('ref', height.value)

};
</script>

<template>
  <div class="teste">
    <span v-if="height >= 0 && height < 500">baixo</span>
    <span v-if="height <= 740 && height > 500">cima</span>
  </div>
  <div class="curriculum__wrapper card-width">
    <div class="curriculum__content is-flex">
      <slot name="sidebar"></slot>
      <slot name="about"></slot>
      <slot name="content"></slot>
    </div>
  </div>
  <div class="curriculum__wrapper__mobile is-flex justify-center align-center">
    Para melhor visualização, por favor acesse por um dispositivo com tela maior.
  </div>
</template>

<style scoped lang="scss">
.teste {
  width: 200px;
  height: 200px;
  background-color: green;
  position: fixed;
  top: 40%;
  left: 20%;
}
.curriculum__wrapper {
  margin: 20px 0 20px 0;
  background: rgb(240,240,240);
  background: linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 50%, rgba(208,208,208,1) 100%);
  -webkit-box-shadow: 10px 10px 11px -1px rgba(0,0,0,0.25);
  -moz-box-shadow: 10px 10px 11px -1px rgba(0,0,0,0.25);
  box-shadow: 10px 10px 11px -1px rgba(0,0,0,0.25);
  animation: 2s ease-out fadeIn;

  @media (max-width: 767px){
    display: none;
  }
}

.curriculum__wrapper__mobile {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.70);
  color: #fff;
  font-size: 1.5rem;
  padding: 5rem;
  line-height: 40px;

  @media (min-width: 767px){
    display: none !important;
  }
}
</style>