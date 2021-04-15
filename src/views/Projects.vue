<template>
  <ul>
    <router-link
      v-for="(item, index) in dataState.data"
      :key="index"
      :to="`/Projects/${item.Slug}`"
      >{{ item.Title }}
      <project-card :projectInfo="{ title: item.Title }" />
    </router-link>
  </ul>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { dataStore } from "../store/data";
import projectCard from "@/components/projectCard.vue";
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
