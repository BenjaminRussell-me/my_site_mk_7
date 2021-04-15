<template>
  <article>
    <h1>{{ $route.params.id }}</h1>
    <h1>project</h1>
    {{ pageState }}
    <img
      v-if="pageState.page?.Hero"
      :src="getStrapiMedia(pageState.page?.Hero?.url)"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { pageStore } from "../store/page";
import media from "../util/media";
export default defineComponent({
  name: "App",
  props: {
    cs: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const route = useRoute();
    const { getStrapiMedia } = media();
    onMounted(() => {
      //first argument is to send already obtained data. if its not there it uses the Projects and route info to grab the data
      pageStore.setPage(`Projects`, route.params.id);
    });
    return {
      pageState: pageStore.getState(),
      getStrapiMedia,
    };
  },
});
</script>
