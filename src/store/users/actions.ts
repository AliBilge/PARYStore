import { UserActionTypes, ADD_USER, UserData } from './types';


export function AddUserToList ( usersdata: UserData ): UserActionTypes {
    return {
        type: ADD_USER,
        payload: usersdata
    }
}


