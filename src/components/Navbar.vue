<template>
  <h1>Nice Shot!</h1>
  <router-link :to="{ name: 'home' }">Home</router-link> /
  <router-link :to="{ name: 'Create' }">Create Post</router-link>
</template>

<script>
import App from "@/App.vue";
export default {
  components: { App },
};
</script>

<style></style>
