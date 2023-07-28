<template>
  <main
    class="flex flex-col justify-center items-center h-full p-4 text-center text-white"
  >
    <h2 class="text-2xl font-semibold mb-4">
      Welcome to Dieselpunk Mech Game!
    </h2>
    <p class="mb-6">
      Join an epic battle of machinations and strategy in a dieselpunk world.
    </p>
    <div class="w-full gap-y-1">
      <router-link
        to="/register"
        class="block w-full mb-4 p-2 | bg-indigo-600 hover:bg-indigo-700 |focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 | text-center text-white | font-medium rounded-md"
      >
        Register
      </router-link>
      <router-link
        to="/login"
        class="block w-full p-2 text-center | bg-zinc-600 hover:bg-zinc-700 | focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 | text-white font-medium | rounded-md"
      >
        Log In
      </router-link>
    </div>
  </main>
</template>

<script setup>
// Here would go any composition API methods, computed properties, etc.
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/usePlayerStore";
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
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
}
</style>
