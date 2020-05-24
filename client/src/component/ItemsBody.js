import React, { Component } from 'react';
import ListItems from './ListItems';
import ListItem from './ListItem';

const ItemsBody = () => {
    return(
        <ListItems>
            <ListItem text="Hello" />
        </ListItems>
    );
}

export default ItemsBody;