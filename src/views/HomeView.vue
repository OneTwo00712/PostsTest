<template>
  <div>
    <input type="text" v-model="search" />
    <p>Search item-{{ search }}</p>
    <div>
      <p v-for="name in filterNames" :key="name">{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    let names = ref([
      "aung",
      "kyaw",
      "min",
      "tun",
      "win",
      "htut",
      "hlaing",
      "swe",
      "kyaw",
      "aung",
    ]);

    let search = ref("");

    let filterNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, filterNames };
  },
};
</script>
