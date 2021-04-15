<template>
  <h1>About</h1>
  <router-link to="/Resume">Resume</router-link>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    cs: {
      type: Object,
      require: true,
    },
  },
  setup() {},
});
</script>
