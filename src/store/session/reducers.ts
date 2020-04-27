import { SessionState, SessionActionTypes, LOG_IN_USER, LOG_OUT_USER} from "./types";


const initialState: SessionState = {
    loggedInId: 0 
}

export function sessionReducer(state = initialState, action: SessionActionTypes): SessionState {
    switch (action.type) {
        case LOG_IN_USER:
            return {
                ...state,
                loggedInId: action.id
            }

        case LOG_OUT_USER:
            return {
                ...state,
                loggedInId: 0
            }

        default:
            return state;
    }
}