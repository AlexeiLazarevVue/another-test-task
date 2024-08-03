import { defineStore } from "pinia";
import { StoreNames } from "../../../shared/types";

export const useModalsStore = defineStore(StoreNames.MODALS, {
  state: () => ({
    activeModals: [],
  }),
  getters: {
    checkModal: (state, modalName: string) => {
      return state.activeModals.includes(modalName)
    }
  },
  actions: {
  showModal: (state, modalName: string) => {
    state.activeModals.push(modalName)
  },
  closeModal: (state, modalName: string) => {
    state.activeModals.filter(activeModal => activeModal !== modalName)
  },
  }
})