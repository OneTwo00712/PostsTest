<template>
  <div class="home">
    <div v-if="showPosts">
      <PostsTitle :posts="posts" />
    </div>
    <button @click="showPosts = !showPosts">Toggle Posts</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostsTitle from "../components/PostsTitle.vue";

export default {
  components: { PostsTitle },
  setup() {
    let posts = ref([
      {
        id: 1,
        title: "book1",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sed laudantium deserunt, magni recusandae explicabo, hic iusto mollitia officia quasi facilis blanditiis maiores rerum non magnam dolorem facere at! Aut nulla porro ullam vel, blanditiis, sapiente dolore id esse velit suscipit possimus vero facere molestias dolorum pariatur! Fugiat obcaecati rem maiores iusto reprehenderit veniam quisquam atque optio exercitationem, repudiandae nemo mollitia quo sed cum. Amet eius cumque, architecto obcaecati a iste delectus illum, veritatis odit reprehenderit deleniti accusantium cupiditate nemo repellat quam id, eum veniam dignissimos fugit ab excepturi pariatur temporibus numquam libero. Optio inventore numquam, temporibus reiciendis officia voluptatibus.",
        author: "author1",
      },
      { id: 2, title: "book2", body: "body2", author: "author2" },
      { id: 3, title: "book3", body: "body3", author: "author3" },
    ]);
    let showPosts = ref(true);
    return { posts, showPosts };
  },
};
</script>
