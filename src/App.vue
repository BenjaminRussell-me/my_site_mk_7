<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/About">About</router-link>
  <router-link to="/Projects">Projects</router-link>
  <router-link to="/Content">Contents</router-link>
  <ul>
    <router-link
      v-for="(item, index) in dataState.data"
      :key="index"
      :to="`/Projects/${item.Slug}`"
      >{{ item.Title }}</router-link
    >
  </ul>
  {{ dataState }}
  <router-view :key="$route.fullPath" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { dataStore } from "./store/data";
export default defineComponent({
  name: "App",
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

<style></style>
