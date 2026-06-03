<template>
  <article class="post-card">
    <router-link
      :to="{ name: 'detail', params: { id: post.id } }"
      class="post-title"
    >
      {{ post.title }}
    </router-link>

    <p class="post-preview">{{ cutPostBody }}</p>

    <div class="post-tags">
      <router-link
        v-for="tag in post.tags || []"
        :key="tag"
        :to="{ name: 'Tag', params: { tag: tag } }"
        class="tag-pill"
      >
        {{ tag }}
      </router-link>
    </div>
  </article>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    const cutPostBody = computed(() => {
      const body = props.post.body || "";

      return body.length > 100 ? body.substring(0, 100) + "..." : body;
    });

    return { cutPostBody };
  },
};
</script>

<style>
.post-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 20px 22px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

.post-title {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 1.35rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;
}

.post-title:hover {
  color: #2563eb;
}

.post-preview {
  margin: 0 0 16px;
  color: #475569;
  line-height: 1.8;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-pill {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease;
}

.tag-pill:hover {
  background: #dbeafe;
  color: #1e40af;
}
</style>
