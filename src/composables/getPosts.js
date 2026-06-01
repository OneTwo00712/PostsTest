import { ref } from "vue";
let getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  let load = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      let response = await fetch("http://localhost:3000/posts");
      if (!response.ok) {
        throw new Error("Could not fetch the data");
      }
      let data = await response.json();
      posts.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};
export default getPosts;
