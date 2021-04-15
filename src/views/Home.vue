<template>
  <section>
    <img id="welcome" alt="hi" src="../assets/img/Welcome.svg" />

    <glowagon> </glowagon>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import glowagon from "@/components/glowagon.vue";
export default defineComponent({
  components: {
    glowagon,
  },
  props: {
    cs: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  display: grid;
}
#welcome {
  width: 60%;
  grid-area: 1/1/1/1;
  place-self: center;
}
svg {
  width: 200px;
}
</style>
