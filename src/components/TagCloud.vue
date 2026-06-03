<template>
  <h1>Tag Cloud</h1>
  <div class="tag-cloud" v-for="tag in uniqueTags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }" class="tag-pill">
      {{ tag }}
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    let uniqueTags = computed(() => {
      const tags = [];

      props.post.forEach((post) => {
        if (!post.tags) return;

        post.tags.forEach((tag) => {
          tags.push(tag);
        });
      });

      return tags.filter((tag, index, array) => {
        return array.indexOf(tag) === index;
      });
    });

    return { uniqueTags };
  },
};
</script>

<style></style>
