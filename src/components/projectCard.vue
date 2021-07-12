<template>
  <section class="projectCard" v-if="projectInfo">
    <div class="topBar"></div>
    <img
      v-if="projectInfo.hero?.formats?.thumbnail?.url"
      :src="getStrapiMedia(projectInfo.hero.formats.thumbnail.url)"
    />
    <img
      v-if="projectInfo.hero?.ext === '.svg'"
      :src="getStrapiMedia(projectInfo.hero.url)"
    />
    <div class="cardContent">
      <h4 class="projectTitle" v-if="projectInfo.title">
        {{ projectInfo.title }}
      </h4>
      <p class="projectDate" v-if="projectInfo.date">{{ projectInfo.date }}</p>
      <div class="tags" v-if="projectInfo.tags">
        <div class="tag" v-for="tag in projectInfo.tags" :key="`tag${tag}`">
          <span :style="{ color: tag.color }">{{ tag.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import media from "../util/media";
export default defineComponent({
  props: {
    projectInfo: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const { getStrapiMedia } = media();
    return {
      getStrapiMedia,
    };
  },
});
</script>

<style lang="scss" scoped>
.topBar {
  height: 10px;
  width: 100%;
  background: linear-gradient(to right, $g1, $g4);
  background-attachment: fixed;
  border-radius: 5px 5px 0 0;
}
.cardContent {
  display: grid;
  padding: 0.5rem 1rem 0.5rem 1rem;
}
.projectCard {
  width: clamp(300px, 40vw, 450px);
  height: 350px;
  background: hsla(0, 0%, 0%, 0.4);
  box-shadow: 0 0 5px 3px black;
  border-radius: 5px;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .projectDate {
    font-size: 1rem;
  }
  .tags {
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
    font-size: 1rem;
  }
}
</style>
