import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { Item } from '../store/inventory/types';
import { Link } from 'react-router-dom';

class ProductCard extends Component<Item> {
    render() {
        return (
            <Link to={`/Product/${this.props.id}`}>
                <Card
                    image={this.props.url}
                    header={this.props.id}
                />
            </Link>
        )
    }
}

export default ProductCard