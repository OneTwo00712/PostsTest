import { ref } from "vue";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

let getPost = (id) => {
  let post = ref(null);
  let error = ref("");
  let load = async () => {
    try {
      const docRef = doc(db, "posts", id);
      let docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        post.value = { ...docSnap.data(), id: docSnap.id };
      } else {
        throw Error("That post does not exist");
      }
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};
export default getPost;
