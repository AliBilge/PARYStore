import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import StoreItem from '../SelectedItem';

const ToggleTab = () => (
  <div>
    <Container fluid>
      <Header as='h2'>Details of {StoreItem}</Header>
      <p>
        Item 1. Domestic Lorem ipsum dolor sit amet consectetur adipisicing elit. Est placeat pariatur corporis provident deleniti adipisci praesentium voluptas odio recusandae et sint repellendus sit vitae, totam non aut unde tempore! Consequuntur! dogs inherited complex behaviors, such as bite inhibition, from
        their wolf ancestors, which would have been pack hunters with complex
        body language. 
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quisquam numquam doloremque quas quod laboriosam delectus ut maxime, est expedita? Recusandae quidem numquam expedita ab nesciunt culpa dolorum architecto.
      </p>
    </Container>
  </div>
)

export default ToggleTab