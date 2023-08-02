<template>
  <main
    class="flex flex-col | justify-center items-center | h-full | p-4 text-center text-white | bg-secondary"
  >
    <div class="w-full gap-y-1">
      <game-btn link="/register" color="accent"> Register </game-btn>
      <game-btn link="/login" color="primary"> Log In</game-btn>
    </div>
  </main>
</template>

<script setup>
// Here would go any composition API methods, computed properties, etc.
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/usePlayerStore";

import GameBtn from "@/components/buttons/GameBtn.vue";

import { useRouter } from "vue-router";
const router = useRouter();
const playerStore = storeToRefs(usePlayerStore());

onMounted(() => {
  if (playerStore.token.value) {
    router.push("/hangar");
  }
});
</script>

<style scoped lang="scss">
// Here would go any scoped styles for this component

main {
}
</style>
