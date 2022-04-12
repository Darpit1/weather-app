<template>
  <div class="w-full h-full">
    <div class="background w-full h-full flex justify-center items-center">
      <div class="w-1/2">
        <div class="p-10 bg-white/10 backdrop-blur-sm rounded-3xl">
          <div class="text-2xl pb-5 text-stone-300">Search for a place</div>
          <div>
            <search-bar class="h-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { SearchBar },
  setup() {
    return {};
  },
});
</script>
