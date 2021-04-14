<template>
  <div :style="{ background: `hsl(${cs.hg},${cs.sg}%,${cs.lg}%)` }">
    <router-link to="/About">About</router-link>
    <router-link to="/Projects">Projects</router-link>
    <router-link to="/Content">Content</router-link>
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { dataStore } from "./store/data";
import { themesStore } from "./store/theme";
export default defineComponent({
  name: "App",
  setup() {
    onMounted(() => {
      dataStore.setData("Projects");
    });
    const cs = computed(() => {
      const theme = themesStore.getState();
      const { h: hg, s: sg, l: lg } = theme.themes.dark.grey;
      const { h: h1, s: s1, l: l1 } = theme.themes.dark.g1;
      const { h: h2, s: s2, l: l2 } = theme.themes.dark.g2;
      const { h: h3, s: s3, l: l3 } = theme.themes.dark.g3;
      const { h: h4, s: s4, l: l4 } = theme.themes.dark.g4;
      const { h: hw, s: sw, l: lw } = theme.themes.dark.white;
      return {
        hg,
        sg,
        lg,
        h1,
        s1,
        l1,
        h2,
        s2,
        l2,
        h3,
        s3,
        l3,
        h4,
        s4,
        l4,
        hw,
        sw,
        lw,
      };
    });
    return {
      dataState: dataStore.getState(),
      theme: themesStore.getState(),
      cs,
    };
  },
});
</script>

<style lang="scss" scoped>
$grey: hsl(220, 20%, 20%);
$g1: hsl(200, 80%, 50%);
$g2: hsl(185, 80%, 50%);
$g3: hsl(160, 80%, 50%);
$g4: hsl(145, 80%, 50%);
</style>
