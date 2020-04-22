import { ADD_FEATURE_PRODUCT, ADD_PRODUCT, ProductionActionTypes, IProductsListState }from './types'

const initialState: IProductsListState = {
    featuredProducts: [
        {
            id: 1,
            header: "aHeader",
            image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            description: "ajhkjhkjhkj"
        },
        {
            id: 2,
            header: "bHeader",
            image: "https://react.semantic-ui.com/images/avatar/large/rachel.png",
            description: "asfsfsd"
        },
        {
            id: 3,
            header: "cHeader",
            image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
            description: "asfsfsd"
        }
    ],
    products: [
        {
            id: 1,
            header: "aHeader",
            image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            description: "ajhkjhkjhkj"
        },
        {
            id: 2,
            header: "bHeader",
            image: "https://react.semantic-ui.com/images/avatar/large/rachel.png",
            description: "asfsfsd"
        },
        {
            id: 3,
            header: "cHeader",
            image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
            description: "asfsfsd"
        },
        {
            id: 4,
            header: "aHeader",
            image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            description: "ajhkjhkjhkj"
        },
        {
            id: 5,
            header: "bHeader",
            image: "https://react.semantic-ui.com/images/avatar/large/rachel.png",
            description: "asfsfsd"
        },
        {
            id: 6,
            header: "cHeader",
            image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
            description: "asfsfsd"
        }
    ]
};

export function productReducer(state=initialState, action: ProductionActionTypes) {
    switch(action.type) {
        case ADD_FEATURE_PRODUCT:
            return {
                ...state,
                featuredProducts: [...state.featuredProducts, action.product]
            }
        default:
            return state;
    }
}

