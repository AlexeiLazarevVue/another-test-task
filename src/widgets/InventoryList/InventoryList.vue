<script lang="ts" setup>
  import { computed, ref } from 'vue'

  import {
    InventoryItemComponent,
    InventoryItemModalComponent,
    useInventoryStore,
    useModalsStore,
  } from '/@src/entities/'
  import { ModalNames } from '/@src/shared/types'

  const inventoryStore = useInventoryStore()
  const modalsStore = useModalsStore()

  const isBeingDeleted = ref(false)
  const deleteAmount = ref(0)

  const inventoryItems = computed(() => inventoryStore.items)

  const onPreDelete = () => {
    isBeingDeleted.value = !isBeingDeleted.value
  }
  const onDelete = () => {
    inventoryStore.deleteItem(inventoryStore.currentItemId, deleteAmount.value)
    isBeingDeleted.value = !isBeingDeleted.value
    deleteAmount.value = 0
  }
  const onCancel = () => {
    isBeingDeleted.value = !isBeingDeleted.value
    deleteAmount.value = 0
  }
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
            const targetItem = inventoryItems.find((item) => item.sort === index)
            inventoryStore.currentItemId = targetItem.id
            targetItem.sort = event
            modalsStore.showModal(ModalNames.ITEM_INFO_MODAL)
          }
        "
        groupName="inventory"
        v-if="inventoryItems.find((item) => item.sort === index)"
      >
        <InventoryItemComponent
          @click="
            () => {
              const targetItem = inventoryItems.find((item) => item.sort === index)
              inventoryStore.currentItemId = targetItem.id
              modalsStore.showModal(ModalNames.ITEM_INFO_MODAL)
            }
          "
          :item="inventoryItems.find((item) => item.sort === index)" />
        <template #dragged-copy>
          <div :class="$style['inventory-list__dragged-copy']">
            <InventoryItemComponent
              view="dragged"
              :item="inventoryItems.find((item) => item.sort === index)"
            /></div></template
      ></draggable>
    </div>
    <InventoryItemModalComponent v-if="inventoryStore.currentItem" :image="inventoryStore.currentItem?.image">
      <template #footer>
        <button-component stratch @click="onPreDelete" v-if="!isBeingDeleted">Удалить</button-component>
        <div v-else :class="$style['inventory-list__delete-confirmation']">
          <input-component type="number" v-model="deleteAmount" placeholder="Введите количество"></input-component>
          <div :class="$style['inventory-list__actions-container']">
            <button-component view="secondary" @click="onCancel">Отмена</button-component>
            <button-component @click="onDelete">Подтвердить</button-component>
          </div>
        </div>
      </template>
    </InventoryItemModalComponent>
  </div>
</template>

<style lang="scss" module>
  .inventory-list {
    position: relative;
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
    &__actions-container {
      display: flex;
      justify-content: space-between;
    }
    &__delete-confirmation {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &__dragged-copy {
      height: 100px;
      width: 100px;
      border-radius: 24px;
    }
  }
</style>
