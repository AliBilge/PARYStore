import * as React from 'react';
import { Image, Card } from 'semantic-ui-react';
import { Item } from '../store/inventory/types';

class SelectedItem extends React.Component<Item> {
    render() {
        return (
            <Card>
                <Image src={this.props.url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Meta>
                        <span>Item Type: {this.props.id}</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        );
    }
}

export default SelectedItem;
