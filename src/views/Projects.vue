<template>
  <section id="ProjectsSection">
    <ul>
      <router-link
        v-for="(item, index) in dataState.data"
        :key="index"
        :to="`/Projects/${item.Slug}`"
        class="projects"
        ><project-card
          :projectInfo="{
            title: item.Title,
            hero: item.Hero,
            date: item.date,
            tags: item.tags,
          }"
        />
      </router-link>
    </ul>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { dataStore } from "../store/data";
import projectCard from "../components/projectCard.vue";
export default defineComponent({
  props: {
    cs: {
      type: Object,
      require: true,
    },
  },
  components: {
    projectCard,
  },
  setup() {
    onMounted(() => {
      dataStore.setData("Projects");
    });
    return {
      dataState: dataStore.getState(),
    };
  },
});
</script>

<style lang="scss" scoped>
#ProjectsSection {
  display: flex;
  justify-content: center;
}
ul {
  display: flex;
  column-gap: 1rem;
  row-gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
}

.projects {
  text-decoration: none;
  color: white;
}
</style>