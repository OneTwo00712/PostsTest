<template>
  <h1>Tag Cloud</h1>
  <div class="tag-cloud" v-for="tag in uniqueTags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }" class="tag-pill">
      {{ tag }}
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["post"],
  setup(props) {
    let tags = ref([]);
    props.post.forEach((post) => {
      post.tags.forEach((tag) => {
        tags.value.push(tag);
      });
    });
    let uniqueTags = tags.value.filter((tag, index, array) => {
      return array.indexOf(tag) === index;
    });
    return { uniqueTags };
  },
};
</script>

<style></style>
