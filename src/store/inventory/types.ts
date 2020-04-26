export interface Item {
    id: number,
    name: string 
}

export interface InventoryState {
    items: Item[]
}
 export const REMOVE_ITEM_FROM_INVENTORY = 'REMOVE_ITEM_FROM_INVENTORY';
 export const ADD_ITEM_TO_INVENTORY = 'ADD_ITEM_TO_INVENTORY';

 interface RemoveItemFromInventory {
     type: typeof REMOVE_ITEM_FROM_INVENTORY,
     payload: number
 }

 interface AddItemToInventory {
     type: typeof ADD_ITEM_TO_INVENTORY,
     payload: Item
 }

 export type InventoryActionTypes = RemoveItemFromInventory | AddItemToInventory;