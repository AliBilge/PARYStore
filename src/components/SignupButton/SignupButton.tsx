import * as React from 'react';
import { Button } from './signup';
import { Link } from 'react-router-dom';

export interface ISignupButtonProps {
    }

export interface ISignupButtonState {
    }

export default class SignupButton extends React.Component<ISignupButtonProps> {
    constructor (props: ISignupButtonProps) {
        super ( props );

        this.state = {
            activeButton : 'signup'
        }
    }
    
    private changeActiveButton( activeButton: string ) {
        this.setState ({

        })
    }
    public render() {
        let { activeButton } = this.state;

        return (
          
              <Button
                  name = 'signup'
                  active = { activeButton === 'Signup'}
                  as = { Link }
                  to = { '/ login' }
                  onClick= {()=> this.changeActiveButton ('Signup')}

              >
                   Signup
                </Button>
          
    );
  }
}
