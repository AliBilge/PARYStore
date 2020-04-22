import React from 'react';
import ToggleTab from './Tabs/Toggle'

export default class Product extends React.Component {
    render ()
    {
        return (
            <article>
                <h2>Product Name:</h2>
                <ToggleTab />   
            </article>
        );
    }
}
