<template>
  <div
    class="min-h-screen max-h-100 flex flex-col | bg-dark | text-light | rounded-lg"
  >
    <nav class="p-2 shadow-sm">
      <h1 class="text-center text-xl font-semibold">Dieselpunk Mech Game</h1>
    </nav>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
// Here would go any composition API methods, computed properties, etc.
</script>

<style lang="scss" scoped>
// Here would go any scoped styles for this component
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.12s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

// BUTTON STYLES
</style>
