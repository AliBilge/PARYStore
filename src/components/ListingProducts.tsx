import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductCard, { IProductProps } from './ProductCard';

interface IProductsListProps {
    featuredProducts: IProductProps[],
    products: IProductProps[]
}

class ListingProducts extends Component<IProductsListProps> {

    render() {
        return (
            <Grid container>
                <Grid.Row columns={3}>
                    {this.props.featuredProducts.map((item, i) => (
                        <Grid.Column key={i}>
                            <ProductCard id='1' header="aaa" image="" description="aaaaaaa"/>
                        </Grid.Column>
                    ))}
            </Grid.Row>
        
            <Grid.Row columns={4}>
                    {this.props.products.map((item, i) => (
                        <Grid.Column key={i}>
                            <ProductCard id='1' header="aaa" image="" description="aaaaaaa"/>
                        </Grid.Column>
                    ))}
            </Grid.Row>
        
            <Grid.Row columns={5}>
                    {this.props.products.map((item, i) => (
                        <Grid.Column key={i}>
                            <ProductCard id='1' header="aaa" image="" description="aaaaaaa"/>
                        </Grid.Column>
                    ))}
            </Grid.Row>
            </Grid>
        )
    }
}

export default ListingProducts;