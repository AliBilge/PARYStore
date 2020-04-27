import { combineReducers, createStore } from 'redux';
import { userReducer } from '../users/reducers';


const rootReducer = combineReducers( {
  users: userReducer
} );


export type RootState = ReturnType<typeof rootReducer>;


export default function configureStore() {
  const store = createStore( rootReducer );
  return store;
}
