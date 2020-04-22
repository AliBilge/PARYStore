import React from 'react';
import { Button, Sticky } from 'semantic-ui-react';

const NavButtons = () => (

  <Sticky>
    <Button.Group size='huge' fluid color='violet'>
      <Button>PARYStore</Button>
      <Button>Home</Button>
      <Button>Contact</Button>
      <Button>Hello</Button>
      <Button>Logout</Button>
    </Button.Group>
  </Sticky>
    
  )

  export default NavButtons