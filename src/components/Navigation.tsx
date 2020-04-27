import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export interface INavBarProps{
 }
 export interface INavBarState{
   activeItem:string;
}


export default class NavBar extends React.Component<INavBarProps,INavBarState>
{
   constructor(props:INavBarProps){
     super(props);
     this.state={
       activeItem:"home"
     }
   }
    public render() {
      let{activeItem} =this.state;
      return(
        <Menu color="violet">
          <Menu.Item name='PARYStore' active={activeItem==='PARYStore'} as={Link} to={'/product'}>PARYStore</Menu.Item>
          <Menu.Item name='Home' active={activeItem==='Home'} as ={Link} to={'/'}>Home</Menu.Item>
          <Menu.Item name='Contact' active={activeItem==='Contact'}  as ={Link} to={'/contact'}>Contact</Menu.Item>
          <Menu.Item name='Login' active={activeItem==='Login'} as={Link} to={'/login'} >Login</Menu.Item>
        </Menu>


      )
    
     
     
    }
  }


