import { UserActionTypes, UserState, ADD_USER } from './types';

// input validation through github

// export const firstName = (value: string) => value && value.charAt(0).toUpperCase() + value.slice(1);
// export const lastName = (value: string) => value && value.charAt(0).toUpperCase() + value.slice(1);
// export const mobile = (value: string) => value.replace(/[^\d]/g, '').slice(0, 10);
// export const mobileNumber = (value: string) =>
//   value && !/^([6-9]\d{9})$/.test(value) ? 'Invalid mobile number, must be 10 digits' : undefined;

// define initial state
const initialState: UserState = {
    usersdata: []
}

export function userReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {

        case ADD_USER:
            return {
                usersdata: [...state.usersdata, action.payload]
            }
        // case LOG_IN_USER:
        //     return {
        //         ...state,
        //         usersdata: [...state.usersdata, action.payload]
        //     }

        // case LOG_OUT_USER:
        //     return {
        //         ...state,
        //         users: [...state.users, action.payload]
        //     }
        default:
            return state;
    }
}

