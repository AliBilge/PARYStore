import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { IProduct } from '../store/ProductsListing/types';
import { RootState } from '../store';
import { connect } from 'react-redux';
import _ from 'lodash';
import { addFeatureProduct, addProduct } from '../store/ProductsListing/actions'
import ProductCard from './ProductCard';

export interface IProductsListProps {
    addFeatureProduct: typeof addFeatureProduct,
    addProduct: typeof addProduct,
    featuredProducts: IProduct[],
    products: IProduct[]
}

class ListingProducts extends Component<IProductsListProps> {

    componentDidMount() {
        var urlBase = "https://jsonplaceholder.typicode.com/photos" 
        fetch(`${urlBase}?_start=0&_limit=3`)
            .then(data => data.json())
            .then(products => products.map(
                ((product: IProduct) => this.props.addFeatureProduct(product))
            ))
        fetch(`${urlBase}?_start=3&_limit=20`)
            .then(data => data.json())
            .then(products => products.map(
                ((product: IProduct) => this.props.addProduct(product))
            ))

    }

    render() { 
        return (
            <Grid centered container>
                <Grid.Row centered columns={4}>
                    {this.props.featuredProducts.map((item, i) => (
                        <Grid.Column key={i}>
                            <ProductCard {...item}/>
                        </Grid.Column>
                    ))}
                </Grid.Row>
        
                {_.chunk(this.props.products, 4).map((item, i) => 
                    (<Grid.Row key={i} centered columns={4}>
                        {item.map((item, i) => (
                            <Grid.Column key={i}>
                                <ProductCard {...item}/>
                            </Grid.Column>))}
                    </Grid.Row>)
                )}
            </Grid>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        featuredProducts: state.productState.featuredProducts,
        products: state.productState.products
    }
}

export default connect(
    mapStateToProps,
    {addFeatureProduct, addProduct}
    )(ListingProducts);