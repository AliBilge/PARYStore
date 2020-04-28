import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Item } from '../store/inventory/types';
import { RootState } from '../store';
import { connect } from 'react-redux';
import _ from 'lodash';
import { addFeaturedItemToInventory, addItemToInventory } from '../store/inventory/actions'
import ProductCard from './ProductCard';

export interface IProductsListProps {
    addFeaturedItemToInventory: typeof addFeaturedItemToInventory,
    addItemToInventory: typeof addItemToInventory,
    featuredProducts: Item[],
    products: Item[]
}

class ListingProducts extends Component<IProductsListProps> {

    componentDidMount() {
        var urlBase = "https://jsonplaceholder.typicode.com/photos"
        if (this.props.featuredProducts.length === 0)
            fetch(`${urlBase}?_start=0&_limit=3`)
                .then(data => data.json())
                .then(products => products.map(
                    ((product: Item) => this.props.addFeaturedItemToInventory(product))
                ))

        if (this.props.products.length === 0)
            fetch(`${urlBase}?_start=3&_limit=20`)
                .then(data => data.json())
                .then(products => products.map(
                    ((product: Item) => this.props.addItemToInventory(product))
                ))
    }

    render() {
        return (

            <Grid centered container>
                <Grid.Row centered columns={4}>
                    {this.props.featuredProducts.map((item, i) => (
                        <Grid.Column key={i}>
                            <ProductCard {...item} />
                        </Grid.Column>
                    ))}
                </Grid.Row>

                {_.chunk(this.props.products, 4).map((item, i) =>
                    (<Grid.Row key={i} centered columns={4}>
                        {item.map((item, i) => (
                            <Grid.Column key={i}>
                                <ProductCard {...item} />
                            </Grid.Column>))}
                    </Grid.Row>)
                )}
            </Grid>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        featuredProducts: state.inventory.featuredItems,
        products: state.inventory.items
    }
}

export default connect(
    mapStateToProps,
    { addFeaturedItemToInventory, addItemToInventory }
)(ListingProducts);