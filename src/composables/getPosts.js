import { ref } from "vue";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = () => {
    try {
      const colRef = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
      );
      onSnapshot(
        colRef,
        (snapshot) => {
          posts.value = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
        },
        (err) => {
          error.value = err.message;
        },
      );
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};
export default getPosts;
