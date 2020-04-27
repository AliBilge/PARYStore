import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import { Button } from '../Signup/SignupPage';
// import { Link } from 'react-router-dom';



interface RouteParms {
  id: string;
}

export interface IUserProfilePageProps extends RouteComponentProps < RouteParms >{
}

export  default class UserProfilePage extends React.Component<IUserProfilePageProps> {
  public render() {
    const { match: {params: { id }}}= this.props;
    return (
      <div>
          User Profile Page id: { id }
      </div>
    );
  }
}


// export interface ISignupButtonProps {
//     }

// export interface ISignupButtonState {
//     }

// export default class ISignupButton extends React.Component<ISignupButtonProps> {
//     constructor (props: ISignupButtonProps) {
//         super ( props );

//         this.state = {
//             SignupButton : 'Signup',
           
//         }
//     }
    
//     private changeSignupButton( SignupButton: string ) {
//         this.setState ({

//         })
//     }
//     public render() {
//         return (
          
//               <Button
//                   name = 'signup'
//                   active = { Button === 'Signup'}
//                   as = { Link }
//                   to = { '/ login' }
//                   onClick= {()=> this.changeSignupButton ('Logout')}

//               >
//                    Signup
//               </Button>
                             
          
//     );
//   }
// }
