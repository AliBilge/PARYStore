import { UserActionTypes, UserState, ADD_USER, REMOVE_USER } from './types';

// define initial state
const initialState: UserState = {
    usersdata : [
        {
        id: 1,
        firstName: 'Poupak',
        lastName: 'Gilani',
        dateOfBirth: 'string',
        gender: 'Female',
        email: 'poupakgilani@shaw.ca',
        phone: 7808602954,
        username: 'Poupak', 
        password: 'poupak'
        },

        {
            id: 2,
            firstName: 'Rathi',
            lastName: 'Ramakrishnan',
            dateOfBirth: 'string',
            gender: 'Female',
            email: 'rathiramakrishnan@shaw.ca',
            phone: 7808602954,
            username: 'Rathi',
            password: 'rathi' 
        }
    ]
}

export function userReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {

        case ADD_USER:
            return {
                ...state
            }
       
           
        case REMOVE_USER:
            return {
                ...state
            }
        
        default:
            return state;
        }
    }