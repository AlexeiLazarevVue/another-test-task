<script setup lang="ts">
  import { defineProps } from 'vue'

  import { InventoryItem } from '/@src/shared/types'

  export type InventoryItemProps = {
    item: InventoryItem
    view?: 'dragged' | 'default'
  }

  const props = withDefaults(defineProps<InventoryItemProps>(), {
    view: 'default',
  })
</script>

<template>
  <div
    :style="
      props.view === 'dragged'
        ? `border-radius: 12px;
    border: 1px solid #4d4d4d;`
        : ''
    "
    :class="$style.item"
  >
    <img :draggable="false" :class="$style.item__image" :src="props.item.image" alt="" />
    <span v-if="props.view === 'default'" :class="$style.item__amount">{{ props.item.amount }}</span>
  </div>
</template>

<style lang="scss" module>
  .item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    user-select: none;

    &:hover {
      background: #2f2f2f;
      cursor: pointer;
    }

    &__image {
      max-height: 75%;
      max-width: 75%;
    }

    &__amount {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 2px 4px;
      background: #262626;
      color: #7d7d7d;
      border-left: 1px solid #4d4d4d;
      border-top: 1px solid #4d4d4d;
      border-radius: 6px 0px 0px 0px;
    }
  }
</style>
