!
<template>
  <button :type="type" :class="btnClass" :to="link" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

let props = defineProps({
  type: {
    type: String,
    default: "button",
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: "indigo",
    required: false,
  },
});
const router = useRouter();
console.log(useRouter());
const onClick = () => {
  if (props.link) {
    router.push(props.link);
  }
};

const colorVariants = {
  primary:
    "bg-transparent hover:bg-primary/20 border-primary focus:-ring-primary",
  accent: "bg-transparent hover:bg-accent/20 border-accent focus:-ring-accent",
  white: "bg-transparent hover:bg-white/20 border-white focus:-ring-white",
};

const btnClass = computed(() => {
  return [
    "block w-full mb-4 p-2",
    "bg-transparent",
    "focus:outline-none focus:ring focus:ring-offset-2",
    "border " + `${colorVariants[props.color]} rounded-0`,
    "text-center text-white",
    "font-medium ",
    "hover:opacity-90 focus:border-white",
    "transition-opacity duration-150 ease-in-out",
  ].join(" ");
});
</script>

<style lang="scss" scoped></style>
