import React from 'react';
import DetailTab from './Tabs/Detail'
import SelectedItem from './SelectedItem'

export default class Product extends React.Component {
    render ()
    {
        return (
            <article>
                <h2>Product Name: {SelectedItem}</h2>
                <DetailTab />   
            </article>
        );
    }
}
