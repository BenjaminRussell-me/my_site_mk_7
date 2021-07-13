<template>
  <main
    :style="{
      background: `hsl(${cs.hg},${cs.sg}%,${cs.lg}%)`,
      color: `hsl(${cs.hw},${cs.sw}%,${cs.lw}%)`,
    }"
  >
    <router-view :cs="cs" :key="$route.fullPath" />
  </main>
  <div id="overlay">
    <router-link
      id="logo"
      to="/"
      :style="{ color: `hsl(${cs.hw},${cs.sw}%,${cs.lw}%)` }"
      ><img src="@/assets/img/logos/logo.svg" />BenjaminRussell.me</router-link
    >

    <navBar :cs="cs" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { themesStore } from "./store/theme";
import navBar from "./components/navBar.vue";
export default defineComponent({
  name: "App",
  components: {
    navBar,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log("hahahahha");
    });
  },
  setup() {
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
    let vh = ref(0);
    function screenSize() {
      let vhFirst = window.innerHeight * 0.01;
      vh.value = vhFirst;
      document.documentElement.style.setProperty("--vh", `${vh.value}px`);
      console.log(vh);
    }
    onMounted(() => {
      screenSize();
      window.addEventListener("resize", () => {
        screenSize();
      });
    });
    return {
      theme: themesStore.getState(),
      cs,
      vh,
    };
  },
});
</script>
<style lang="scss">
main {
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  padding: 6rem 3rem 6rem 3rem;
}
#overlay {
  position: fixed;
  pointer-events: none;
  top: 0;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  display: grid;
  z-index: 500;
  #logo {
    grid-area: 1/1/1/1;
    pointer-events: initial;
    text-decoration: none;
    font-weight: lighter;
    display: flex;
    column-gap: 1rem;
    justify-self: start;
    align-self: start;
    align-items: center;
    margin: 1rem 1rem 0 1rem;
    img {
      width: 50px;
    }
  }
}
</style>
