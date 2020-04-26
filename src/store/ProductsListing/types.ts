export interface IProduct {
    albumId: number
    id: number
    title: string,
    url: string,
    thumbnailUrl: string
};

export interface IProductsListState {
    featuredProducts: IProduct[],
    products: IProduct[]
};

export const ADD_FEATURE_PRODUCT = "ADD_FEATURE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

interface AddFeatureProduct {
    type: typeof ADD_FEATURE_PRODUCT,
    product: IProduct
};

interface AddProduct {
    type: typeof ADD_PRODUCT,
    product: IProduct
};

export type ProductionActionTypes = AddFeatureProduct | AddProduct;