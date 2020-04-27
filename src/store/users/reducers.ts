import { UserActionTypes, UserState, ADD_USER, REMOVE_USER } from './types';

//input validation through github

export const firstName = (value: string) => value && value.charAt(0).toUpperCase() + value.slice(1);
export const lastName = (value: string) => value && value.charAt(0).toUpperCase() + value.slice(1);
export const mobile = (value: string) => value.replace(/[^\d]/g, '').slice(0, 10);
export const mobileNumber = (value: string) =>
  value && !/^([6-9]\d{9})$/.test(value) ? 'Invalid mobile number, must be 10 digits' : undefined;

// define initial state
const initialState: UserState = {
    usersdata : [
        {
        id: 1,
        firstName: 'Poupak',
        lastName: 'Gilani',
        dateOfBirth: 'string',
        gender: 'Female',
        email: 'poupakgilani@pary.ca',
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
            email: 'rathiramakrishnan@pary.ca',
            phone: 5879840125,
            username: 'Rathi',
            password: 'rathi' 
        },

        {
            id: 3,
            firstName: 'Ali',
            lastName: 'Bilge',
            dateOfBirth: 'string',
            gender: 'Male',
            email: 'alibilge@pary.ca',
            phone: 7808602954, // sorry I couldn't find your number
            username: 'Ali',
            password: 'ali' 
        },

        {
            id: 4,
            firstName: 'Vincent',
            lastName: 'Cui',
            dateOfBirth: 'string',
            gender: 'Male',
            email: 'vincentcui@pary.ca',
            phone: 7808073296,
            username: 'Vincent',
            password: 'vincent' 
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

    