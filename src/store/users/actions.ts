import { UserActionTypes, ADD_USER, LOG_OUT_USER, LOG_IN_USER, UserData } from './types';


export function AddUserToList(usersdata: UserData): UserActionTypes {
    return {
        type: ADD_USER,
        payload: usersdata
    }
}

export function logOutUser(usersdata: UserData): UserActionTypes {
    return {
        type: LOG_OUT_USER,
        payload: usersdata
    }
}

export function logInUser(usersdata: UserData): UserActionTypes {
    return {
        type: LOG_IN_USER,
        payload: usersdata
    }
}

