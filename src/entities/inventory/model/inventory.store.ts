import { defineStore } from 'pinia'

import { InventoryItem, StoreNames } from '../../../shared/types'

export const useInventoryStore = defineStore(StoreNames.INVENTORY, {
  state: () => ({
    currentItemId: 0,
    items: [
      {
        id: 1,
        title: 'fdfd',
        description: 'fddfdsssss',
        amount: 5,
        image: window.location.origin + '/src/app/assets/Item Image.png',
        sort: 2,
      },
      {
        id: 2,
        title: 'fdfd',
        description: 'fddfdsssss',
        amount: 5,
        image: window.location.origin + '/src/app/assets/Item Image-2.png',
        sort: 5,
      },
    ],
  }),
  getters: {
    filteredItems: (state) => {
      // Тут можно добавить фильтры
      return state.items
    },
    currentItem: (state) => {
      return state.items.find((item) => item.id === state.currentItemId)
    },
  },
  actions: {
    deleteItem(id: InventoryItem['id'], amount: number) {
      const targetItem = this.items.find((item) => item.id === id)
      if (targetItem) {
        if (targetItem?.amount > amount) {
          targetItem.amount -= amount
        } else {
          this.items = this.items.filter((item) => item.id !== id)
        }
      }
    },
    init() {
      const cachedInventory = localStorage.getItem('inventory')
      console.log({ cachedInventory })

      if (cachedInventory) {
        this.items = JSON.parse(cachedInventory)
      }
    },
    save() {
      localStorage.setItem('inventory', JSON.stringify(this.items))
    },
  },
})
