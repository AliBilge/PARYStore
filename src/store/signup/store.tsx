import { createStore, Store, combineReducers } from 'redux';
import { signupReducer, ISignupState } from './reducers';


export interface IAppState {
    signupState: ISignupState
}

// Set up a root reducer
const rootReducer = combineReducers < IAppState >({
    signupState: signupReducer
});

// Global storage
export default function configureStore (): Store < IAppState, any > {
    const store = createStore ( rootReducer );
    return store;
}