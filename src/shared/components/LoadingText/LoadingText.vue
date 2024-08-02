<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
export type LoadingTextProps = {
  height?: number;
  textAlign?: string;
  rows?: number;
};

const props = withDefaults(defineProps<LoadingTextProps>(), {
  height: 18,
  textAlign: "center",
  rows: 1,
});
</script>

<template>
  <span>ds</span>
</template>

<style lang="scss" module></style>
