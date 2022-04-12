<template>
  <div class="flex items-center relative">
    <search-icon
      class="pointer-events-none text-white w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-1"
    />
    <input
      type="text"
      placeholder="Search..."
      class="h-full w-full border-b-2 pl-8 focus:outline-none bg-transparent text-white"
      v-model="userInput"
    />
  </div>
</template>

<script lang="ts">
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { SearchIcon },
  setup() {
    const userInput = ref<string>("");

    return {
      userInput,
    };
  },
});
</script>
