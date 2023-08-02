<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: "h-8",
  },
  width: {
    type: String,
    default: "w-8",
  },
});

const icon = defineAsyncComponent(() =>
  import(`../assets/icons/${props.name}.svg`)
);
</script>

<template>
  <component :is="icon" class="fill-current" :class="[height, width]" />
</template>

<style lang="scss" scoped>
svg {
}
</style>
