<template>
  <contentHolder>
    <article id="project">
      <h1 id="projectTitle">{{ nw(pageState.page.Title) }}</h1>
      <p v-if="pageState.page.date">{{ pageState.page.date }}</p>
      <img
        id="projectHero"
        v-if="pageState.page?.Hero"
        :src="getStrapiMedia(pageState.page?.Hero?.url)"
      />
      <div>
        <section
          v-html="md(pageState.page.content)"
          v-if="pageState.page.content"
          class="markdown"
        ></section>
      </div>
    </article>
  </contentHolder>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { pageStore } from "../store/page";
import contentHolder from "../components/contentHolder.vue";
import media from "../util/media";
import noWidow from "../util/noWidow";
import marked from "marked";
import DOMPurify from "dompurify";
export default defineComponent({
  name: "App",
  props: {
    cs: {
      type: Object,
      require: true,
    },
  },
  components: {
    contentHolder,
  },
  setup() {
    const route = useRoute();
    const { getStrapiMedia } = media();
    const { setNoWidow } = noWidow();

    onMounted(() => {
      pageStore.setPage(`Projects`, route.params.id);
    });

    function md(text: string) {
      let root = import.meta.env.VITE_URL;
      const mk = marked(text, { baseUrl: root });
      return mk;
    }
    return {
      pageState: pageStore.getState(),
      getStrapiMedia,
      nw: setNoWidow,
      md,
    };
  },
});
</script>

<style lang="scss" scoped>
#project {
  max-width: 1000px;
}
#projectHero {
  width: 100%;
}
</style>
<style lang="scss">
#project {
  img {
    max-width: clamp(300px, 100%, 1000px);
    max-height: 800px;
    object-fit: contain;
  }
}
</style>
