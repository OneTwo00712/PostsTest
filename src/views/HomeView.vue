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

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.home h1 {
  display: inline-block;
  position: relative;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
}

.home h1::after {
  content: "";
  display: block;
  width: 100%;
  height: 6px;
  background: #42b983;
  position: absolute;
  bottom: 0;
  z-index: -1;
  left: 0;
}

.error {
  color: #ff3f80;
  background: #ffeef2;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ff3f80;
}
</style>
