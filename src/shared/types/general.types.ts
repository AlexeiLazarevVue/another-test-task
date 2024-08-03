export enum StoreNames {
  INVENTORY = 'inventory',
  MODALS = 'modals'
}

export type InventoryItem = {
  id: number,
  title: string,
  description: string,
  sort: number
}

export enum ModalNames {
  WARNING_MODAL = 'warning_modal',
  ITEM_INFO_MODAL = 'item-info_modal'
}