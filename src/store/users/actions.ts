import { UserActionTypes, ADD_USER, REMOVE_USER, UserData } from './types';


export function ADD_USER_TO_LIST ( usersdata: UserData ): UserActionTypes {
    return {
        type: ADD_USER,
        payload: usersdata
    }
}

export function REMOVE_USER_FROM_LIST (id: number): UserActionTypes {
    return{
        type: REMOVE_USER,
        id: id
    }
}

// const validate = (values: UserData): UserData => {
//     const errors: errors<UserData> = {};

//     if (!values.firstName) {
//       errors.userName = 'firstname is required';
//     }

//     if (!values.lastName) {
//         errors.userDOB = 'lastname is required';
//     }

//     if (!values.dateOfBirth) {
//       errors.dateOfBirth = 'Date of Birth is required';
//     }

//     if (!values.gender) {
//       errors.gender = 'Gender is required';
//     }

//     if (!values.email) {
//       errors.email = 'Email is required';
//     }

//     if (!values.phone) {
//       errors.phone = 'Phone Number is required';
//     }

//     if (!values.username) {
//       errors.username = 'Username is required';
//     }

//     if (!values.password) {
//       errors.password = 'Password is required';
//     }

//       return errors;
// };
// export default validate;