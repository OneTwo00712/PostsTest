<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length" class="layout">
    <div>
      <PostsTitle v-if="filteredPosts.length" :posts="filteredPosts" />
      <p v-else>No posts found for "{{ tag }}".</p>
    </div>
    <div>
      <TagCloud :post="posts" />
    </div>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import { computed } from "vue";
import getPosts from "../composables/getPosts";
import PostsTitle from "../components/PostsTitle.vue";
import TagCloud from "../components/TagCloud.vue";
import Loading from "../components/Loading.vue";
export default {
  props: ["tag"],
  components: { PostsTitle, Loading, TagCloud },
  setup(props) {
    let { posts, error, load } = getPosts();
    let filteredPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags && post.tags.includes(props.tag);
      });
    });
    load();
    return { posts, error, load, filteredPosts };
  },
};
</script>

<style></style>
