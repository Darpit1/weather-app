<template>
  <div class="w-screen h-screen overflow-auto font-Hahmlet">
    <landing-page />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LandingPage from "./pages/LandingPage.vue";

export default defineComponent({
  components: { LandingPage },
  setup() {
    return {};
  },
});
</script>
