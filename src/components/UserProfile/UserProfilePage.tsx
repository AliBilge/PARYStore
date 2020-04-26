import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParms {
  id: string;
}

export interface IUserProfilePageProps extends RouteComponentProps < RouteParms >{
}

export default class UserProfilePage extends React.Component<IUserProfilePageProps> {
  public render() {
    const { match: {params: { id }}}= this.props;
    return (
      <div>
          User Profile Page id: { id }
      </div>
    );
  }
}
