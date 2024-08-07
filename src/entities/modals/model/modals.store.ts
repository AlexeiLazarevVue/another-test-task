import { defineStore } from 'pinia'

import { ModalNames,StoreNames } from '/@src/shared/types'

export const useModalsStore = defineStore(StoreNames.MODALS, {
  state: () => ({
    activeModals: [ModalNames.WARNING_MODAL] as string[],
  }),
  getters: {
    checkModal: (state) => {
      return (modalName: string) => state.activeModals.includes(modalName)
    },
  },
  actions: {
    showModal(modalName: string) {
      this.activeModals.push(modalName)
    },
    closeModal(modalName: string) {
      this.activeModals = this.activeModals.filter((activeModal) => activeModal !== modalName)
    },
  },
})
