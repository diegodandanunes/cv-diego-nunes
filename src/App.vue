<script setup>
import Background from "./components/Background.vue";
import Curriculum from "./components/Curriculum.vue";
import CurriculumSidebar from "./components/CurriculumSidebar.vue";
import CurriculumContent from "./components/CurriculumContent.vue";
import About from "./components/About.vue";
</script>

<template>
<Background>
  <Curriculum>
    <template v-slot:sidebar>
      <CurriculumSidebar></CurriculumSidebar>
    </template>
    <template v-slot:content>
      <CurriculumContent></CurriculumContent>
    </template>
    <template v-slot:about>
      <About></About>
    </template>
  </Curriculum>
</Background>
</template>