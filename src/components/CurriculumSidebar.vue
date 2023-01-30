<script setup>
import Title from '../components/Title.vue';

import { storeToRefs } from 'pinia';
import { useMainStore } from '../stores/main'
const mainStore = useMainStore()
const { education, skills, courses } = storeToRefs(mainStore)
</script>

<template>
  <div class="curriculum-sidebar__wrapper  has-background-grey-darkest is-flex">
    <div class="curriculum-sidebar__image mt-3">
      <img src="../assets/images/diego.jpg" alt="Diego Nunes">
    </div>
    <div class="mt-5"></div>
    <div class="curriculum-sidebar__sections">
      <Title :inverted="true" :title="'Educação'"></Title>
      <div class="curriculum-sidebar__education">
        <div class="curriculum-sidebar__education-item mb-1 pb-3" v-for="(formation, i) in education" :key="i">
          <p class="curriculum-sidebar__education-date">{{ formation.date }}</p>
          <b><p class="curriculum-sidebar__education-name">{{ formation.name }}</p></b>
          <p class="curriculum-sidebar__education-degree">{{ formation.degree }}</p>
        </div>
      </div>
    </div>
    <div class="curriculum-sidebar__skills mt-3">
      <Title :inverted="true" :title="'Main skills'"></Title>
      <div class="curriculum-sidebar__skill pb-3">
        <p class="mb-1" v-for="(skill, i) in skills" :key="i">{{skill}}</p>
      </div>
    </div>
    <div class="curriculum-sidebar__sections mt-3">
      <Title :inverted="true" :title="'Cursos'"></Title>
      <div class="curriculum-sidebar__education">
        <div class="curriculum-sidebar__education-item mb-1 pb-3" v-for="(course, i) in courses" :key="i">
          <b><p class="curriculum-sidebar__education-date">{{ course.name }}</p></b>
          <p class="curriculum-sidebar__education-name">{{ course.institution }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.curriculum-sidebar__wrapper {
  width: 35%;
  // height: 100%;
  align-items: center;
  flex-flow: column;
}

.curriculum-sidebar__image {
  width: 120px;
  height: 150px;

  img {
    width: 100%;
    border-radius: 50%;
    border: 1px solid white;
    padding: 10px;
  }
}

.curriculum-sidebar__sections, .curriculum-sidebar__skills, .curriculum-sidebar__courses{
  width: 80%;
  color: #fff;
}

.curriculum-sidebar__education {
  &-item:not(:last-child) {
    border-bottom: 1px solid #444452;
  }

  &-date {
    font-size: 14px;
  }
}
</style>