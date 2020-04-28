import React from 'react';
import { Button, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavButtons = () => (

  <Sticky>
    <Button.Group size='huge' fluid color='green'>
      {/*    <Button>PARYStore</Button> */}
      <Button
        as={Link}
        to={`/ListingProducts`}>
        Home
      </Button>

      <Button
        as={Link}
        to={`/ListingProducts`}>
        Contact
      </Button>

      <Button
        as={Link}
        to={`/`}>
        Signup
      </Button>

      <Button
        as={Link}
        to={`/Login`}>
        Login
      </Button>

    </Button.Group>
  </Sticky>

)

export default NavButtons