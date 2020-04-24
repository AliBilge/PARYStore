import React from 'react';
import ToggleTab from './Tabs/Toggle'
import SelectedItem from './SelectedItem'

export default class Product extends React.Component {
    render ()
    {
        return (
            <article>
                <h2>Product Name: {SelectedItem}</h2>
                <ToggleTab />   
            </article>
        );
    }
}
