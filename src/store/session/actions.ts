import { SessionActionTypes, LOG_OUT_USER, LOG_IN_USER,User } from "./types";

export function logOutUser(user:User): SessionActionTypes {

    return {
        type: LOG_OUT_USER,
        payload:user
    }
}

export function logInUser(user: User): SessionActionTypes {
    return {
        type: LOG_IN_USER,
        payload:user
    }
}