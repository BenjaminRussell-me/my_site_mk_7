<template>
  <h1>{{ $route.params.id }}</h1>
  <h1>project</h1>
  {{ pageState }}
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { pageStore } from "../store/page";
export default defineComponent({
  name: "App",
  setup() {
    const route = useRoute();
    onMounted(() => {
      //object is to send already obtained data. if its not there it uses the Projects and route info to grab the data
      pageStore.setPage({}, `Projects`, route.params.id);
    });
    return {
      pageState: pageStore.getState(),
    };
  },
});
</script>
