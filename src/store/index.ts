import { combineReducers, createStore } from 'redux';
import { sessionReducer } from "./session/reducers";

const rootReducer = combineReducers({
    session: sessionReducer,

    
    
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(
        rootReducer);

    return store;
}