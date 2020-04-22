import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';

export interface IProductProps {
    id: string
    header: string,
    image: string,
    description: string
}

class ProductCard extends Component<IProductProps> {
    render() {
        return (
            <Card
            image={this.props.image}
            header={this.props.header}
            description={this.props.description}
            />
        )
    }
}

export default ProductCard