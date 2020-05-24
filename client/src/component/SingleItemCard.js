import React, { Component } from 'react';

class SingleItemCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            title: props.title,
            isDone: props.isDone
        };
    }

    render(){
        return(
            <div>Hello cowboy!</div>
        );
    }
}

export default SingleItemCard;