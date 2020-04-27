export interface UserState {
    usersdata: UserData []
}

export interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    phone: number;
    username: string; // use for user login
    password: string; // use for user login
}

// To add or remove new user to the website data list
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

interface ADD_USER {
    type: typeof ADD_USER,
    payload: UserData
}

interface REMOVE_USER {
    type: typeof REMOVE_USER,
    id: number
}

export type UserActionTypes = ADD_USER | REMOVE_USER;