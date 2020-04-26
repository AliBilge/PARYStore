import { ADD_FEATURE_PRODUCT, ADD_PRODUCT, ProductionActionTypes, IProductsListState } from './types'

const initialState: IProductsListState = {
    featuredProducts: [],
    products: []
};

export function productReducer(state=initialState, action: ProductionActionTypes) {
    switch(action.type) {
        case ADD_FEATURE_PRODUCT:
            return {
                ...state,
                featuredProducts: [...state.featuredProducts, action.product]
            }
        case ADD_PRODUCT:
                return {
                    ...state,
                    products: [...state.products, action.product]
                }
        default:
            return state;
    }
}

