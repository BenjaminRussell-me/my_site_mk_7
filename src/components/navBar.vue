<template>
  <div
    id="navGradient"
    :style="{
      background: `linear-gradient( to right,hsl(${cs.h1},${cs.s1}%,${cs.l1}%), hsl(${cs.h4},${cs.s4}%,${cs.l4}%))`,
    }"
  >
    <nav :style="{ background: `hsl(${cs.hg},${cs.sg}%,${cs.lg - 5}%)` }">
      <router-link
        class="navLink"
        :style="{ color: `hsl(${cs.h1},${cs.s1}%,${cs.l1}%)` }"
        to="/"
        >Home</router-link
      >
      <router-link
        class="navLink"
        :style="{ color: `hsl(${cs.h2},${cs.s2}%,${cs.l2}%)` }"
        to="/About"
        >About</router-link
      >
      <router-link
        class="navLink"
        :style="{ color: `hsl(${cs.h3},${cs.s3}%,${cs.l3}%)` }"
        to="/Projects"
        >Projects</router-link
      >
      <router-link
        class="navLink"
        :style="{ color: `hsl(${cs.h4},${cs.s4}%,${cs.l4}%)` }"
        to="/Content"
        >Content</router-link
      >
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cs: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
#navGradient {
  grid-area: 1/1/1/1;
  align-self: end;
  padding: 0.3rem 0 0 0;
  border-radius: 100% 100% 0 0;
  box-shadow: 0 0 5px 3px;
}
nav {
  display: flex;
  padding: 0.5rem 1rem 1.5rem 1rem;
  justify-content: center;
  height: 2rem;
  column-gap: 1.5rem;
  pointer-events: initial;
  border-radius: 100% 100% 0 0;
  .navLink {
    text-decoration: none;
  }
}
</style>
