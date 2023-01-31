<script setup>
import Title from "../components/Title.vue";

import { storeToRefs } from "pinia";
import { useMainStore } from "../stores/main";
const mainStore = useMainStore();
const { name, position, jobs, profile } = storeToRefs(mainStore);
</script>

<template>
  <div class="curriculum-content__wrapper ml-3">
    <div class="curriculum-content__name-wrapper mt-3">
      <div class="curriculum-content__name title is-1 m-0 bebas-spacing">
        {{ name }}
      </div>
      <div class="curriculum-content__position has-text-caption">
        {{ position }}
        <p>
          <a
            href="https://www.linkedin.com/in/diegodandanunes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="pt-1 fa fa-linkedin" aria-hidden="true"></i>
            <span>Linkedin</span>
          </a>
        </p>
      </div>
    </div>
    <div class="mt-5"></div>
    <Title title="Perfil" />
    <p class="mb-1" v-for="(paragraph, i) in profile" :key="i">
      {{ paragraph }}
    </p>

    <div class="curriculum-content__experiences mt-3">
      <Title title="Experiência" />
      <div
        class="curriculum-content__experience mb-3"
        v-for="(job, i) in jobs"
        :key="i"
      >
        <div class="curriculum-content__experiences--title">
          <b
            ><span class="has-text-body is-block">{{ job.position }}</span></b
          >
          <p class="curriculum-content__experiences--company mb-1">
            <b
              ><span>{{ job.company }}</span></b
            >
            | <span>{{ job.date }}</span
            ><span
              class="
                curriculum-content__experiences--title
                has-text-weight-bold
              "
              v-if="job.remote"
            >
              | Remoto</span
            >
          </p>
        </div>
        <div class="curriculum-content__profile">
          <p class="mb-1" v-for="(paragraph, i) in job.description" :key="i">
            {{ paragraph }}
          </p>
          <b class="mr-1">Skills</b>
          <span
            class="curriculum-content__skills"
            v-for="(skill, i) in job.skills"
            :key="i"
            >{{ skill }}
            <span v-if="i !== job.skills.length - 1"> ◦ </span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.curriculum-content {
  &__wrapper {
    width: 65%;

    a span {
      margin-left: 5px;
      margin-top: 5px;
      text-transform: none;
    }

    a i {
      font-size: 18px;
    }

    p {
      width: 90%;
    }
  }

  &__name-wrapper {
    height: 150px;
  }

  &__name {
    font-family: "Bebas Neue", cursive;
    text-transform: uppercase;
    font-size: 4rem;
  }

  &__position {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: -12px;
  }

  &__experiences {
    &--company {
      border-bottom: 2px solid #dbdbe3;
      padding-bottom: 10px;
    }
  }

  &__skills {
    font-size: 14px;
  }
}
</style>