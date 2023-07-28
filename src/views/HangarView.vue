<template>
  <main class="flex flex-col items-center justify-center">
    <div class="shadow p-6 m-4 w-full max-w-xs text-white">
      <div class="mb-4">
        <h2 class="text-center text-xl font-bold">Hangar</h2>
        <div class="mt-4 text-center text-md">
          <p>Name: {{ playerStore.name.value }}</p>
          <p>Cash: {{ playerStore.cash.value }}</p>
        </div>
      </div>
      <div class="mb-6 w-full flex flex-col text-center">
        <router-link
          to="/missions"
          class="block w-full mb-4 p-2 | bg-indigo-600 hover:bg-indigo-700 |focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 | text-center text-white | font-medium rounded-md"
          >Missions</router-link
        >
        <router-link
          to="/loadout"
          class="block w-full p-2 text-center | bg-zinc-600 hover:bg-zinc-700 | focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 | text-white font-medium | rounded-md"
          >Loadout</router-link
        >
        <!-- <router-link to="/options" class="btn btn-blue w-full mt-4"
          >Options</router-link
        > -->
        <button class="btn btn-red w-full mt-4" @click="leaveGame">
          Leave Game
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useRouter } from "vue-router";
const router = useRouter();
const { leaveGame } = usePlayerStore();
const playerStore = storeToRefs(usePlayerStore());
</script>

<style scoped lang="scss">
.btn {
  @apply py-2 px-4 rounded;

  &.btn-blue {
    @apply bg-blue-500 hover:bg-blue-700 text-white;
  }

  &.btn-red {
    @apply bg-red-500 hover:bg-red-700 text-white;
  }
}
main {
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
}
</style>
