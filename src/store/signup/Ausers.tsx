//import { ActionCreator } from 'redux';

// set our action names as constant
export enum SignupActionTypes {
    GET_ALL = 'GET_ALL'
}

// Interface for action type(s)
export interface ISignupGetAllAction {
    type: SignupActionTypes.GET_ALL
}

// Gathering all actions from the user
export type SignupActions = ISignupGetAllAction;