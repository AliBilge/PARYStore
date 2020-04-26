import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import { IProduct } from '../store/ProductsListing/types';

class ProductCard extends Component<IProduct> {
    render() {
        return (
            <Card
            image={this.props.url}
            header={this.props.id}

            />
        )
    }
}

export default ProductCard