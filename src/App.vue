<script setup>
import Background from "./components/Background.vue";
import Curriculum from "./components/Curriculum.vue";
import CurriculumSidebar from "./components/CurriculumSidebar.vue";
</script>

<template>
<Background>
  <Curriculum>
    <template v-slot:sidebar>
      <CurriculumSidebar></CurriculumSidebar>
    </template>
  </Curriculum>
</Background>
</template>

<style scoped lang="scss">

</style>
