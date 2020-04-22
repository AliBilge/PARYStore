import { combineReducers, createStore } from 'redux';
import { productReducer } from './ProductsListing/reducer'

const rootReducer = combineReducers({
    productState: productReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(rootReducer);
    return store;
}

