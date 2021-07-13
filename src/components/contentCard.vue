<template>
  <div class="contentCard">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  setup() {},
});
</script>
<style lang="scss" scoped>
.contentCard {
  display: flex;
}
</style>