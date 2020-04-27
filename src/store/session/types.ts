
export interface SessionState {
    loggedInId: number;
}


export  const LOG_IN_USER= 'LOG_IN_USER';
export  const LOG_OUT_USER = 'LOG_OUT_USER';


interface LogInUser {
    type: typeof LOG_IN_USER
    id: number
}

interface LogOutUser {
    type: typeof LOG_OUT_USER
    id:number
}


export  type SessionActionTypes = LogOutUser | LogInUser;
