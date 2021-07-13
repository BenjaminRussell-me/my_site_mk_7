<template>
  <section>
    <ul>
      <content-card
        v-for="(data, index) in dataState.data"
        :key="`content${index}`"
        :title="data.title"
      >
      </content-card>
    </ul>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { dataStore } from "../store/data";
import markdown from "../util/markdown";
import contentCard from "../components/contentCard.vue";
export default defineComponent({
  components: { contentCard },
  props: {
    cs: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const { setMarkdown } = markdown();
    onMounted(() => {
      dataStore.setData("Contents");
    });
    return {
      dataState: dataStore.getState(),
      md: setMarkdown,
    };
  },
});
</script>
<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  ul {
    display: flex;
  }
}
</style>