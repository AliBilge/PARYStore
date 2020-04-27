import { UserActionTypes, ADD_USER, UserData } from './types';


export function ADD_USER_TO_LIST ( usersdata: UserData ): UserActionTypes {
    return {
        type: ADD_USER,
        payload: usersdata
    }
}

// export function REMOVE_USER_FROM_LIST (id: number): UserActionTypes {
//     return{
//         type: REMOVE_USER,
//         id: id
//     }
// }

