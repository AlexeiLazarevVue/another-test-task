import { defineStore } from "pinia";
import { StoreNames } from "../../../shared/types";

const useInventoryStore = defineStore(StoreNames.INVENTORY, {
  state: () => ({
    currentItemId: 0
  }),
  getters: {
    currentItem: (state) => {
      return {}
    }
  }
})