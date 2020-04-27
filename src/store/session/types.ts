
export interface SessionState {
      users:User[]
}
export interface User {
    username:string;
    password:string;
    submitted:boolean;
    usernameErr:boolean;
    passwordErr:boolean;

}


export  const LOG_IN_USER= 'LOG_IN_USER';
export  const LOG_OUT_USER = 'LOG_OUT_USER';


interface LOG_IN_USER {
    type: typeof LOG_IN_USER
    payload: User
}

interface LOG_OUT_USER{
    type: typeof LOG_OUT_USER
    payload:User
}


export  type SessionActionTypes = LOG_OUT_USER | LOG_IN_USER;
