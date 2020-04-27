import { SessionActionTypes, LOG_OUT_USER, LOG_IN_USER } from "./types";

export function logOutUser(userId: number): SessionActionTypes {
    console.log("VYgMkKXQsuIFeRCN4tv16wcyN/8+7MMf2VOua46M8IiVE4bg5/LJ8aHlrXghGD/rGZU9n0KPTJizZS9XUI0Avw==")
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