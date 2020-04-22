import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { IProduct } from '../store/ProductsListing/types';
import { RootState } from '../store';
import { connect } from 'react-redux';
import { addFeatureProduct, addProduct } from '../store/ProductsListing/actions'
import ProductCard from './ProductCard';

export interface IProductsListProps {
    addFeatureProduct: typeof addFeatureProduct,
    addProduct: typeof addProduct,
    featuredProducts: IProduct[],
    products: IProduct[]
}

class ListingProducts extends Component<IProductsListProps> {

    render() {
        debugger
        return (
            <Grid container>
                <Grid.Row columns={3}>
                    {this.props.featuredProducts.map((item, i) => (
                        <Grid.Column key={i}>
                            <ProductCard {...item}/>
                        </Grid.Column>
                    ))}
            </Grid.Row>
        
            <Grid.Row columns={4}>
                    {this.props.products.map((item, i) => (
                        <Grid.Column key={i}>
                            <ProductCard {...item}/>
                        </Grid.Column>
                    ))}
            </Grid.Row>
        
            <Grid.Row columns={5}>
                    {this.props.products.map((item, i) => (
                        <Grid.Column key={i}>
                            <ProductCard {...item}/>
                        </Grid.Column>
                    ))}
            </Grid.Row>
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