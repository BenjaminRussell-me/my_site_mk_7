<template>
  <div
    id="navGlow"
    :style="{
      background: `linear-gradient( to right,hsla(${cs.h1},${cs.s1}%,${cs.l1}%,0.2), hsla(${cs.h4},${cs.s4}%,${cs.l4}%,0.2))`,
    }"
  >
    <div
      id="navGradient"
      :style="{
        background: `linear-gradient( to right,hsl(${cs.h1},${cs.s1}%,${cs.l1}%), hsl(${cs.h4},${cs.s4}%,${cs.l4}%))`,
      }"
    >
      <nav :style="{ background: `hsl(${cs.hg},${cs.sg}%,${cs.lg - 5}%)` }">
        <router-link class="navLink" id="link1" to="/">Home</router-link>
        <router-link class="navLink" id="link2" to="/About">About</router-link>
        <router-link class="navLink" id="link3" to="/Projects"
          >Projects</router-link
        >
        <router-link class="navLink" id="link4" to="/Content"
          >Content</router-link
        >
      </nav>
    </div>
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
#navGlow {
  grid-area: 1/1/1/1;
  align-self: end;
  padding: 1rem 0 0 0;
  border-radius: 50% 50% 0 0;
}
#navGradient {
  padding: 0.3rem 0 0 0;
  border-radius: 100% 100% 0 0;
  box-shadow: 0 0 5px 3px;
}
nav {
  display: flex;
  padding: 0.5rem 1rem 1.5rem 1rem;
  justify-content: center;
  height: 2.5rem;
  column-gap: 2rem;
  pointer-events: initial;
  border-radius: 100% 100% 0 0;
  .navLink {
    text-decoration: none;
    transition: 0.2s ease;
    font-weight: 600;
    &:hover {
      font-weight: 300;
    }
    &:focus {
      transition: 0.1s;
      font-weight: 600;
      transform: scale(0.8);
      box-shadow: none !important;
    }
  }
  @mixin glow($shadowColor) {
    text-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 5px $shadowColor,
      0 0 10px $shadowColor, 0 0 15px $shadowColor, 0 0 20px $shadowColor,
      0 0 25px $shadowColor;
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
