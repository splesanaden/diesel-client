<template>
  <main class="flex flex-col justify-center items-center h-full">
    <div class="max-w-md w-full | p-8 | border border-light">
      <div>
        <h2 class="text-center text-3xl font-semibold text-light">Register</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="register">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm gap-y-4 |">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              v-model="username"
              class="appearance-none rounded-none | relative block w-full | px-3 py-2 | border border-light placeholder-light | focus:outline-none focus:ring-white focus:border-white focus:z-10 | text-white sm:text-sm | bg-transparent"
              placeholder="Name"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              v-model="password"
              class="appearance-none rounded-none | relative block w-full | px-3 py-2 | border border-light placeholder-light | focus:outline-none focus:ring-white focus:border-white focus:z-10 | text-white sm:text-sm | bg-transparent"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="w-100 flex flex-col">
          <game-btn type="submit" color="primary"> Register </game-btn>

          <game-btn to="/" color="white"> Back </game-btn>
        </div>
      </form>
      <ErrorMessage :error="playerStore.error" />
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import ErrorMessage from "@/components/ErrorMessage.vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/usePlayerStore";
import GameBtn from "../components/buttons/GameBtn.vue";

const playerStore = storeToRefs(usePlayerStore());
const router = useRouter();
const username = ref("");
const password = ref("");

const register = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post("/api/player/register", {
      name: username.value,
      password: password.value,
    });
    if (response.data && response.data.player.token) {
      console.log(response.data);
      localStorage.setItem("token", response.data.player.token);
      playerStore.token.value = response.data.player.token;
      playerStore.error.value = null;
      playerStore.name = username.value;
    }
    router.push("/hangar");
  } catch (error) {
    console.error(error);
    playerStore.error.value = error.response.data.error;
  }
};

onMounted(() => {
  playerStore.error.value = null;
  if (playerStore.token.value) {
    router.push("/hangar");
  }
});
</script>

<style scoped lang="scss"></style>
