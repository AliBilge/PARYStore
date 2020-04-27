import { SessionActionTypes, LOG_OUT_USER, LOG_IN_USER } from "./types";

export function logOutUser(userId: number): SessionActionTypes {

    return {
        type: LOG_OUT_USER,
        id:userId
    }
}

export function logInUser(userId: number): SessionActionTypes {
    return {
        type: LOG_IN_USER,
        id: userId
    }
}