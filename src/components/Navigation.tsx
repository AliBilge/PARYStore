import React from 'react';
import { Button, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavButtons = () => (

  <Sticky>
    <Button.Group size='huge' fluid color='green'>
      {/*    <Button>PARYStore</Button> */}
      <Button
        as={Link}
        to={`/ListingProducts`}
        content="GoToHomePage">Home
      </Button>

      <Button
        as={Link}
        to={`/ListingProducts`}
        content="GoToContact">Contact
      </Button>

      <Button
        as={Link}
        to={`/`}
        content="GoToSignup">Signup
      </Button>

      <Button
        as={Link}
        to={`/Login`}
        content="GoToLogin">Login</Button>

    </Button.Group>
  </Sticky>

)

export default NavButtons