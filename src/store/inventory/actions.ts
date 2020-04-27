import { InventoryActionTypes, ADD_ITEM_TO_INVENTORY, ADD_FEATURED_ITEM_TO_INVENTORY, Item } from './types';

export function addFeaturedItemToInventory ( item: Item ): InventoryActionTypes {
    return {
        type: ADD_FEATURED_ITEM_TO_INVENTORY,
        payload: item
    }
}

export function addItemToInventory ( item: Item ): InventoryActionTypes {
    return {
        type: ADD_ITEM_TO_INVENTORY,
        payload: item 
    }
}