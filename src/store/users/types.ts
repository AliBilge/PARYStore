export interface UserState {
    usersdata: UserData[]
}

export interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    phone: string;
    username: string; // use for user login
    password: string; // use for user login
    isLogin: boolean;
}

// To add or remove new user to the website data list
export const ADD_USER = 'ADD_USER';
export const LOG_IN_USER = 'LOG_IN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';

interface ADD_USER {
    type: typeof ADD_USER,
    payload: UserData
}

interface LOG_IN_USER {
    type: typeof LOG_IN_USER,
    payload: UserData
}

interface LOG_OUT_USER {
    type: typeof LOG_OUT_USER,
    payload: UserData
}

export type UserActionTypes = ADD_USER | LOG_IN_USER | LOG_OUT_USER;