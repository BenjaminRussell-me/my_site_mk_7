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
      <section
        class="contentBlock"
        v-for="(block, index) in pageState.page.basicBlock"
        :key="`block${pageState.page.Title}${index}`"
      >
        <h3 v-if="block.title">{{ nw(block.title) }}</h3>
        <img
          class="imgs"
          v-if="block.img"
          :src="getStrapiMedia(block.img?.url)"
        />
        <div
          class="textBlock"
          v-for="(textblock, index) in block.textBlock"
          :key="`bockText${pageState.page.Title}${index}`"
        >
          <h4 v-if="textblock.title">{{ nw(textblock.title) }}</h4>
          <img
            class="imgs"
            v-if="textblock.img"
            :src="getStrapiMedia(textblock.img?.url)"
          />
          <p v-if="textblock.text">{{ nw(textblock.text) }}</p>
        </div>
        <p v-if="block.codePen">{{ block.codePen }}</p>
      </section>
    </article>
  </contentHolder>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { pageStore } from "../store/page";
import contentHolder from "../components/contentHolder.vue";
import media from "../util/media";
import noWidow from "../util/noWidow";
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
    return {
      pageState: pageStore.getState(),
      getStrapiMedia,
      nw: setNoWidow,
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
.imgs {
  max-width: clamp(300px, 100%, 1000px);
  max-height: 700px;
}
</style>