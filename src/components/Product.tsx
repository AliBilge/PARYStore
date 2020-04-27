import * as React from 'react';
import DetailTab from './Detail'
import SelectedItem from './SelectedItem'
import { RouteComponentProps } from 'react-router-dom';
import { Item } from '../store/inventory/types'
import { RootState } from '../store';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'

interface RouteParams {
    id: string;
}

export interface IProductProps extends RouteComponentProps<RouteParams> {
    featuredProducts: Item[];
    products: Item[];
}

export class Product extends React.Component<IProductProps> {
    render ()
    {   
        const { match: { params: {id}}, featuredProducts, products } = this.props;

        let itemOfConcern: Item = featuredProducts.filter(individualItem => (individualItem.id === +id))[0];
        if (itemOfConcern === undefined)
            itemOfConcern = products.filter(individualItem => (individualItem.id === +id))[0];

        return (
        
            <Segment.Group raised>
                <Segment.Group horizontal>
                    <Segment.Group>
                        <Segment padded>

        <h2>Product Name: {id}</h2>
                
                            </Segment>
                        <Segment padded>
                    <SelectedItem {...itemOfConcern}/>
                </Segment>
                </Segment.Group>
                    <Segment.Group>
                        <Segment padded compact>    
                <DetailTab />
                        </Segment>

                    </Segment.Group>
                </Segment.Group>
            </Segment.Group>
        
            
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        featuredProducts: state.inventory.featuredItems,
        products: state.inventory.items
    }
}

export default connect(mapStateToProps)(Product);