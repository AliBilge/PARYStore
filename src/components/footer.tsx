import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

export default class Footer extends React.Component {
    render ()
    {
        return (
 
            <Segment.Group>
                <Segment.Group horizontal>
                <Segment textAlign='center' inverted color='black'><strong>CONTACT US</strong><br/><br/><Icon name='home' size='large' /><br/><p>101, 10010-100 St NW<br/>Edmonton, AB<br/>T5Y5V5</p>
                </Segment>

                <Segment textAlign='center' inverted color='black'><strong>WE ACCEPT</strong><br/><br/><Icon name='cc mastercard' size='large' /><Icon name='cc visa' size='large' /><Icon name='cc paypal' size='large' /><br/><Icon name='cc apple pay' size='large' /><Icon name='payment' size='large' /><Icon name='cc amazon pay' size='large' />
                </Segment>

                <Segment textAlign='center' inverted color='black'><strong>BUSINESS HOURS</strong><br/><br/><Icon name='clock' size='large' /><br/><p>Mon-Fri: 07:00-20:00<br/>Sat-Sun: 08:00-22:00</p>
                </Segment>

                <Segment textAlign='center' inverted color='black'><strong>FIND US</strong><br/><br/><Icon name='facebook f' size='large'/><Icon name='twitter' size='large'/><Icon name='instagram' size='large'/><br/><Icon name='pinterest' size='large'/><Icon name='google' size='large'/><Icon name='linkedin' size='large'/>
                </Segment>

                </Segment.Group>
                <Segment inverted color='black' textAlign='center'>Copyright &#169; PARYStore 2020</Segment>
            </Segment.Group>
        );
    }
}