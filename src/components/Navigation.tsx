import React from 'react';
import {Button, Responsive, Segment} from 'semantic-ui-react';

const NavButtons = () => (
  <div>
    <Responsive maxWidth={768}>
      <Button.Group textAlign='center' vertical centered fluid color='violet'>
        <Button textAlign='center'>PARYStore</Button>
        <Button>Home</Button>
        <Button>Contact</Button>
        <Button>Hello</Button>
        <Button>Logout</Button>
      </Button.Group>
    </Responsive>
    <Responsive minWidth={768}>
      <Button.Group fluid color='violet'>
        <Button>PARYStore</Button>
        <Button>Home</Button>
        <Button>Contact</Button>
        <Button>Hello</Button>
        <Button>Logout</Button>
        </Button.Group>
    </Responsive>
  </div>
)

  export default NavButtons