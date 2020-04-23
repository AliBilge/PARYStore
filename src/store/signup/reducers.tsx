import { Reducer } from 'redux';
import { SignupActions, SignupActionTypes } from './Ausers';

// define sign up fields
export interface ISignup {
    firstname: string,
    lastname: string,
    gender: string,
    email: string,
    address: string,
    dateofbirth: number,
    phone: number
}

//define the state
export interface ISignupState {
    readonly signup: ISignup [ ]
}

//default state value (empty array)
const initialSignupState: ISignupState = {
    signup: [ ]
}

export const signupReducer: Reducer <ISignupState, SignupActions> = ( state = initialSignupState, action ) => {
    switch  ( action.type )
    {
        case SignupActionTypes.GET_ALL:
            return {
                ...state,
               // signup: action.signup
            }

            default:
                return state;
    }
 
}
