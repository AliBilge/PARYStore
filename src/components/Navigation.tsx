import React from 'react';
import { Button, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavButtons = () => (

  <Sticky>
    <Button.Group size='huge' fluid color='green'>
      <Button>PARYStore</Button>
      <Button  
      as={Link}
      to={`/ListingProducts`}
      content="GoToHomPage">Home
      </Button>

      <Button>Contact</Button>

      <Button
      as={Link}
      to={`/Product`}
      content="GoToProduct">Hello
      </Button>

      <Button>Logout</Button>

    </Button.Group>
  </Sticky>
    
  )

  export default NavButtons