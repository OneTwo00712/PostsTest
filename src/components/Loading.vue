<template>
  <div class="load"></div>
</template>

<script>
export default {};
</script>

<style>
.load {
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #3498db;
  width: 40px;
  height: 40px;
  margin: 40px auto;
  animation: spin 2s infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
