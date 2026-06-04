<template>
  <div class="detail">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <button @click="deletePost">Delete</button>
    </div>
    <div v-else>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Loading from "../components/Loading.vue";
import { useRouter } from "vue-router";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
export default {
  components: { Loading },
  props: ["id"],
  setup(props) {
    let { post, error, load } = getPost(props.id);
    let router = useRouter();
    load();
    const deletePost = async () => {
      try {
        await deleteDoc(doc(db, "posts", props.id));
        router.push("/");
      } catch (err) {
        console.log(err.message);
      }
    };

    return { post, error, deletePost };
  },
};
</script>

<style></style>
