export enum StoreNames {
  INVENTORY = 'inventory'
}

export type InventoryItem = {
  id: number,
  title: string,
  description: string,
  sort: number
}