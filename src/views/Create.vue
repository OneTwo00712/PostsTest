<template>
  <div class="create-page">
    <div class="card">
      <header class="card__header">
        <h1>Create New Post</h1>
        <p>Write something great and add tags to organize your post.</p>
      </header>

      <form @submit.prevent="submitForm" class="post-form">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            required
            v-model="title"
            placeholder="Post title"
          />
        </div>

        <div class="form-group">
          <label for="body">Body</label>
          <textarea
            id="body"
            required
            v-model="body"
            placeholder="Write your post content..."
            rows="6"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="tag">Tags</label>
          <div class="tag-input-row">
            <input
              id="tag"
              type="text"
              v-model="tag"
              @keydown.enter.prevent="addTag"
              placeholder="Type a tag and press Enter"
            />
            <button type="button" class="tag-button" @click="addTag">
              Add
            </button>
          </div>
          <div class="tag-list" v-if="tags.length">
            <span class="tag-pill" v-for="(item, index) in tags" :key="index">
              {{ item }}
              <button
                type="button"
                class="tag-remove"
                @click="removeTag(index)"
              >
                ×
              </button>
            </span>
          </div>
        </div>

        <button type="submit" class="submit-button">Add Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const router = useRouter();
    const tags = ref([]);

    function addTag() {
      const trimmed = tag.value.trim();
      if (trimmed && !tags.value.includes(trimmed)) {
        tags.value.push(trimmed);
      }
      tag.value = "";
    }

    function removeTag(index) {
      tags.value.splice(index, 1);
    }

    let submitForm = async () => {
      let newPost = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };
      let res = await addDoc(collection(db, "posts"), newPost);

      router.push({ name: "home" });
    };

    return { title, body, tag, tags, addTag, removeTag, submitForm };
  },
};
</script>

<style scoped>
.create-page {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  background: linear-gradient(180deg, #f4f7ff 0%, #eef5ff 100%);
}

.card {
  width: min(640px, 100%);
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 24px 80px rgba(38, 86, 165, 0.12);
  padding: 32px;
  border: 1px solid rgba(80, 107, 203, 0.1);
}

.card__header {
  margin-bottom: 28px;
  text-align: center;
}

.card__header h1 {
  margin: 0;
  font-size: 2rem;
  color: #172a4d;
}

.card__header p {
  margin: 12px auto 0;
  max-width: 520px;
  color: #5b6778;
  line-height: 1.6;
}

.post-form {
  display: grid;
  gap: 20px;
}

.form-group {
  display: grid;
  gap: 10px;
}

.form-group label {
  font-weight: 600;
  color: #334155;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #d8e0ec;
  border-radius: 16px;
  background: #f8fafc;
  font-size: 1rem;
  color: #1f2937;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #5b8df7;
  box-shadow: 0 0 0 4px rgba(91, 141, 247, 0.12);
  background: #ffffff;
}

.tag-input-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
}

.tag-button {
  padding: 0 22px;
  border: none;
  border-radius: 16px;
  background: #4f46e5;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;
}

.tag-button:hover {
  background: #3730a3;
  transform: translateY(-1px);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.tag-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 0.95rem;
}

.tag-remove {
  border: none;
  background: transparent;
  color: #1d4ed8;
  font-size: 1.1rem;
  cursor: pointer;
  line-height: 1;
}

.submit-button {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.submit-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 40px rgba(59, 130, 246, 0.18);
}

@media (max-width: 520px) {
  .card {
    padding: 24px;
  }

  .card__header h1 {
    font-size: 1.75rem;
  }
}
</style>
