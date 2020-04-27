import { UserActionTypes, ADD_USER, UserData } from './types';


export function ADD_USER_TO_LIST ( usersdata: UserData ): UserActionTypes {
    return {
        type: ADD_USER,
        payload: usersdata
    }
}


