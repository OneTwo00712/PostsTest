<template>
  <h1>Posts Title</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    onMounted(() => {
      console.log(props.posts);
    });
    onUnmounted(() => {
      console.log("PostsTitle component unmounted");
    });
    return {};
  },
};
</script>

<style></style>
