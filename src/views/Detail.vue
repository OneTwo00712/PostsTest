<template>
  <div class="detail">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
    <div v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Loading from "../components/Loading.vue";
export default {
  components: { Loading },
  props: ["id"],
  setup(props) {
    let { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style></style>
