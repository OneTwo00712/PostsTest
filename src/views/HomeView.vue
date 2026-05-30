<template>
  <div class="home">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-if="posts.length > 0">
      <PostsTitle :posts="posts" />
    </div>
    <div v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import PostsTitle from "../components/PostsTitle.vue";
import Loading from "../components/Loading.vue";
import getPosts from "../composables/getPosts";

export default {
  components: { PostsTitle, Loading },
  setup() {
    let { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>
