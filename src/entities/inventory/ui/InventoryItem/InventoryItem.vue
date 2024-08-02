<script setup lang="ts">
import { defineProps } from "vue";
import { InventoryItem } from "/@src/shared/types";

export type InventoryItemProps = { item: InventoryItem };

const props = defineProps<InventoryItemProps>();
</script>

<template>
  <div :class="$style.item">
    <img
      :class="$style.item__image"
      src="../../../../app/assets/Item Image-2.png"
      alt=""
    />
  </div>
</template>

<style lang="scss" module>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  user-select: none;
  &__image {
    max-height: 75%;
    max-width: 75%;
  }
}
</style>