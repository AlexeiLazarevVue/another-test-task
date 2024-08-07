<script lang="ts" setup>
  import { defineProps,defineSlots } from 'vue'

  import { ModalNames } from '/@src/shared/types'

  import { useModalsStore } from '../../model'
  import { SideModalComponent } from '../templates'

  type InventoryItemModalProps = {
    image: string
    headline: string
    description: string
    footer: string
  }

  const slots = defineSlots()
  const props = defineProps<InventoryItemModalProps>()
  const modalsStore = useModalsStore()

  const onCloseModal = () => {
    modalsStore.closeModal(ModalNames.ITEM_INFO_MODAL)
  }
</script>

<template>
  <SideModalComponent
    @onCloseModal="onCloseModal"
    :class="$style['inventory-item-modal']"
    v-if="modalsStore.checkModal(ModalNames.ITEM_INFO_MODAL)"
  >
    <div :class="$style['inventory-item-modal__image-container']">
      <img :src="props.image" :class="$style['inventory-item-modal__image']" />
    </div>
    <div :class="$style['inventory-item-modal__text-block']">
      <div v-if="slots.headline">
        <slot name="headline" />
      </div>
      <div v-else-if="props.headline !== null">
        <h3 v-if="props.headline">{{ props.headline }}</h3>
        <loading-text v-else height="24" />
      </div>

      <div v-if="slots.description">
        <slot name="description" />
      </div>
      <div v-else-if="props.description !== null">
        <p v-if="props.description">{{ props.description }}</p>
        <loading-text v-else width="random" :rows="5" height="10" />
      </div>
    </div>
    <div v-if="slots.footer || props.footer !== null" :class="$style['inventory-item-modal__footer']">
      <slot v-if="slots.footer" name="footer" />
      <div v-else-if="props.footer !== null">
        <span v-if="props.footer">{{ props.footer }}</span>
        <loading-text v-else width="random" height="10" />
      </div>
    </div>
  </SideModalComponent>
</template>

<style lang="scss" module>
  .inventory-item-modal {
    display: flex;
    flex-direction: column;
    width: 250px;
    justify-content: space-between;
    border: 1px solid #4d4d4d;
    background: 100%;
    overflow: hidden;
    &__image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #4d4d4d;
      padding: 36px 14px;
    }
    &__image {
      justify-self: center;
      align-self: center;
      height: 130px;
      width: 130px;
    }
    &__text-block {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
      padding: 18px 14px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        border-radius: 10px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #4d4d4d;
        // border-radius: 10px;
      }
    }
    &__footer {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 18px 14px 0 14px;
      bottom: 0;
      border-top: 1px solid #4d4d4d;
    }
  }
</style>
