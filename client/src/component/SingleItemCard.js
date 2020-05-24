import React, { Component } from 'react';
import SingleItemCardElements from './SingleItemCardElements';

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
        const { title, isDone } = this.state;
        if(this.state.editing){
            return(
                <div>Editing ...</div>
            );
        }
        return(
            <SingleItemCardElements title={title} isDone={isDone} />           
        );
    }
}

export default SingleItemCard;