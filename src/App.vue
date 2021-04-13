<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  {{ dataState }}
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { dataStore } from "./store/data";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
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

<style></style>
