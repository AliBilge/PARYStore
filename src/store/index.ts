import { combineReducers, createStore, applyMiddleware } from 'redux';
import { userReducer } from './users/reducers';
import { inventoryReducer } from "./inventory/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    users: userReducer,
    inventory: inventoryReducer
})


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

