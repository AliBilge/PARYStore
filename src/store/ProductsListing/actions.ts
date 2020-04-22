import { ProductionActionTypes, ADD_FEATURE_PRODUCT, ADD_PRODUCT, IProduct} from './types';

export function addFeatureProduct(product: IProduct): ProductionActionTypes {
    return {
        type: ADD_FEATURE_PRODUCT,
        product
    }
}

export function addProduct(product: IProduct): ProductionActionTypes {
    return {
        type: ADD_PRODUCT,
        product
    }
}