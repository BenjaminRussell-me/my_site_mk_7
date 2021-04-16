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
        id="link1"
        to="/"
        >Home</router-link
      >
      <router-link
        class="navLink"
        id="link2"
        to="/About"
        >About</router-link
      >
      <router-link
        class="navLink"
        id="link3"
        to="/Projects"
        >Projects</router-link
      >
      <router-link
        class="navLink"
        id="link4"
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
    transition:  0.3s ease;
    &:hover {
      font-weight: 300;
    }
  }
  @mixin glow($shadowColor) {
    text-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 5px $shadowColor, 0 0 10px $shadowColor, 0 0 15px $shadowColor, 0 0 20px $shadowColor, 0 0 25px $shadowColor;
  }
  #link1 {
    $shadowColor: $g1;
    color: $shadowColor;
    &:hover {
      color: white;
    @include glow($shadowColor);
    }
  }
  #link2 {
    $shadowColor: $g2;
    color: $shadowColor;
    &:hover {
      color: white;
    @include glow($shadowColor);
    }
  }
  #link3 {
    $shadowColor: $g3;
    color: $shadowColor;
    &:hover {
      color: white;
    @include glow($shadowColor);
    }
  }
  #link4 {
    $shadowColor: $g4;
    color: $shadowColor;
    &:hover {
      color: white;
    @include glow($shadowColor);
    }
  }
}
</style>
