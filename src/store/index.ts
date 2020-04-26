import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { inventoryReducer } from "./inventory/reducers";
import { productReducer } from './ProductsListing/reducer'

const rootReducer = combineReducers({
    inventory: inventoryReducer,
    productState: productReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware()
        )
    );

    return store;
}
