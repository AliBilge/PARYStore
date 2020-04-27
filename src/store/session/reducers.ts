import { SessionState, SessionActionTypes, LOG_IN_USER, LOG_OUT_USER} from "./types";


const initialState: SessionState = {
    users: [
        {
        username: 'Poupak', 
        password: 'poupak',
        submitted:false,
        usernameErr:false,
        passwordErr:false
        },
    ]
}

export function sessionReducer(state = initialState, action: SessionActionTypes):SessionState{
    switch (action.type) {
        case LOG_IN_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case LOG_OUT_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        default:
            return state;
    }
}