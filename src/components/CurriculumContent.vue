<script setup>
import Title from "../components/Title.vue";
</script>

<template>
  <div class="curriculum-content__wrapper ml-3">
    <div class="curriculum-content__name-wrapper mt-3">
      <div class="curriculum-content__name title is-1 m-0">Diego Nunes</div>
      <div class="curriculum-content__position has-text-caption">
        Front End Developer
      </div>
    </div>
    <div class="mt-5"></div>
    <Title title="Profile" />
    <p>
      Desenvolvedor de front-end e UI formado na PUCRS. Encontro soluções usando
      minha expertise de Desenvolvimento Front End, aliado à minha experiência
      com design de UI, utilizando as tecnologias e frameworks mais importantes
      do mercado. <br> Larga experiência com Design System e experiência com back end
      e desenvolvimento de API.
    </p>
  </div>
</template>

<style scoped lang="scss">
.curriculum-content__wrapper {
  width: 65%;
}

.curriculum-content__name-wrapper {
  height: 150px;
}

.curriculum-content__name {
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
  font-size: 4rem;
}

.curriculum-content__position {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: -12px;
}

p {
  font-size: 12px;
  width: 90%
}
</style>