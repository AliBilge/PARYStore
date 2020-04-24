import * as React from 'react';
import { connect } from 'react-redux';
import { Item } from '../store/inventory/types';
import { removeItemFromInventory, addItemToInventory } from '../store/inventory/actions';
import { RootState } from '../store';
import { Button, Card } from 'semantic-ui-react';

export interface ISelectedItemProps {
    itemId: number;
    items: Item[];
    addItemToInventory: typeof addItemToInventory;
    removeItemFromInventory: typeof removeItemFromInventory;
};


export class SelectedItem extends React.Component<ISelectedItemProps> {
    onClickAddItemToInventory() {
        let { itemId } = this.props

        this.props.removeItemFromInventory(itemId);
        this.props.addItemToInventory(itemId);
    }

    public render() {
        let { items, itemId } = this.props;
        let itemOfConcern = items.filter(individualItem => (individualItem.id === itemId))[0];
        return (
            <Card>
            <Card.Content>
                <Card.Header>{itemOfConcern.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Item Type: {itemOfConcern.itemTypeId}</span>
                </Card.Meta>
                <Card.Description>
                    And item Id: {itemOfConcern.id}
                </Card.Description>
                <Card.Group>
                    <Button
                        content="Add Item To Inventory"
                        onClick={() => this.onClickAddItemToInventory()}
                    />
                </Card.Group>
            </Card.Content>
        </Card>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        items: state.inventory.items,
    };
}

export default connect(mapStateToProps, {addItemToInventory, removeItemFromInventory})
(SelectedItem);
