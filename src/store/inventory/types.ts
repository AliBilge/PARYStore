export interface Item {
    albumId: number
    id: number
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface InventoryState {
    featuredItems: Item[],
    items: Item[]
}
 export const ADD_FEATURED_ITEM_TO_INVENTORY = 'ADD_FEATURED_ITEM_TO_INVENTORY';
 export const ADD_ITEM_TO_INVENTORY = 'ADD_ITEM_TO_INVENTORY';

 interface AddFeaturedItemToInventory {
     type: typeof ADD_FEATURED_ITEM_TO_INVENTORY,
     payload: Item
 }

 interface AddItemToInventory {
     type: typeof ADD_ITEM_TO_INVENTORY,
     payload: Item
 }

 export type InventoryActionTypes = AddFeaturedItemToInventory | AddItemToInventory;
