import { defineStore } from "pinia";
import { StoreNames } from "../../../shared/types";

export const useInventoryStore = defineStore(StoreNames.INVENTORY, {
  state: () => ({
    currentItemId: 0,
    items: [{
      id: 1,
      title: 'fdfd',
      description: 'fddfdsssss',
      sort: 2
    },
  {
      id: 2,
      title: 'fdfd',
      description: 'fddfdsssss',
      sort: 5
    }]
  }),
  getters: {
    currentItem: (state) => {
      return {}
    }
  },
  actions: {
  //   initItems: (state) => {
      
  //   }
  }
})