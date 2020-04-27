import { combineReducers, createStore } from 'redux';
import { sessionReducer } from "./session/reducers";
import { userReducer } from './users/reducers';

const rootReducer = combineReducers({
    session: sessionReducer,
    users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(
        rootReducer);

    return store;
}