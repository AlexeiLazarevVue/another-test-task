<script lang="ts" setup>
  import { defineProps } from 'vue'

  import { ModalNames } from '/@src/shared/types'

  import { useModalsStore } from '../../model'
  import { EdgeModalComponent } from '../templates'

  type WarningModalProps = {
    text?: string
  }

  const props = defineProps<WarningModalProps>()
  const modalsStore = useModalsStore()

  const onCloseModal = () => {
    modalsStore.closeModal(ModalNames.WARNING_MODAL)
  }
</script>

<template>
  <EdgeModalComponent
    @onCloseModal="onCloseModal"
    :class="$style['warning-modal']"
    v-if="modalsStore.checkModal(ModalNames.WARNING_MODAL)"
  >
    <p v-if="props.text">{{ props.text }}</p>
    <loading-text border-radius="12" height="36" v-else></loading-text>
  </EdgeModalComponent>
</template>

<style lang="scss" module>
  .warning-modal {
    width: 100%;
    padding-right: 60px;
  }
</style>
