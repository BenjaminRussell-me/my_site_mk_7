<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  {{ dataState }}
  <router-view />
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
