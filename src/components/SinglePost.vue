<template>
  <router-link :to="{ name: 'detail', params: { id: post.id } }">
    <h1>{{ post.title }}</h1>
  </router-link>
  <div class="post">
    <p>{{ cutPostBody }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    let cutPostBody = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });

    return { cutPostBody };
  },
};
</script>

<style></style>
