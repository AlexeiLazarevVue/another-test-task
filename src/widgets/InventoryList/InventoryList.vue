<script lang="ts" setup>
import { computed } from "vue";
import { useInventoryStore, InventoryItemComponent } from "/@src/entities/";

const inventoryStore = useInventoryStore();

const inventoryItems = computed(() => inventoryStore.items);
console.log(inventoryItems.value);
</script>

<template>
  <div :class="$style['inventory-list']">
    <div
      v-for="index in 25"
      :key="index"
      :class="$style['inventory-list__item']"
      :data-id="index"
      data-group="inventory"
    >
      <draggable
        @onDragEnd="
          (event) => {
            inventoryItems.find((item) => item.sort === index).sort = event;
            console.log(inventoryItems);
          }
        "
        groupName="inventory"
        v-if="inventoryItems.find((item) => item.sort === index)"
      >
        <InventoryItemComponent
          :item="inventoryItems.find((item) => item.sort === index)"
      /></draggable>
    </div>
  </div>
</template>

<style lang="scss" module>
.inventory-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 525px;
  height: 500px;
  gap: 1px;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  background: #4d4d4d;
  overflow: hidden;
  &__item {
    background: #262626;
  }
}
</style>
