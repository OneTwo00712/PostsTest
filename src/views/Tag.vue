<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostsTitle :posts="filteredPosts" />
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import { computed } from "vue";
import getPosts from "../composables/getPosts";
import PostsTitle from "../components/PostsTitle.vue";
import Loading from "../components/Loading.vue";
export default {
  props: ["tag"],
  components: { PostsTitle, Loading },
  setup(props) {
    let { posts, error, load } = getPosts();
    let filteredPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(props.tag));
    });
    load();
    return { posts, error, load, filteredPosts };
  },
};
</script>

<style></style>
