import * as React from 'react';
import DetailTab from './Tabs/Detail'
import SelectedItem from './SelectedItem'
import { RouteComponentProps } from 'react-router-dom';
import { Item } from '../store/inventory/types'
import { RootState } from '../store';
import { connect } from 'react-redux';

interface RouteParams {
    id: string;
}

export interface IProductProps extends RouteComponentProps<RouteParams> {
    featuredProducts: Item[];
    products: Item[];
    isFeaturedProducts: boolean;
}

export class Product extends React.Component<IProductProps> {
    render ()
    {   
        const { match: { params: {id}}, featuredProducts, products } = this.props;

        let itemOfConcern: Item;
        // if (this.props.isFeaturedProducts) {
        if (true) {
            debugger
            itemOfConcern = featuredProducts.filter(individualItem => (individualItem.id === +id))[0];

        } else {
            itemOfConcern = products.filter(individualItem => (individualItem.id === +id))[0];
        }

        return (
            <article>
                <h2>Product Name: </h2>
                <SelectedItem {...itemOfConcern}/>
                <DetailTab />   
            </article>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    debugger
    return {
        featuredProducts: state.inventory.featuredItems,
        products: state.inventory.items
    }
}

export default connect(mapStateToProps)(Product);