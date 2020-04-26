import { InventoryState, ADD_FEATURED_ITEM_TO_INVENTORY, ADD_ITEM_TO_INVENTORY, InventoryActionTypes } from './types';

const initialState: InventoryState = {
    featuredItems: [],
    items: []
}

export function inventoryReducer(state = initialState, action: InventoryActionTypes) {
    switch (action.type) {
        case ADD_ITEM_TO_INVENTORY:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case ADD_FEATURED_ITEM_TO_INVENTORY:
            return {
                ...state,
                featuredItems: [...state.featuredItems, action.payload]
            }
        default:
            return state;
    }
}
