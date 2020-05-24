import React, { Component } from 'react';
import SingleItemCardElements from './SingleItemCardElements';
import CreateEditItem from './CreateEditItem';

class SingleItemCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            title: props.title,
            isDone: props.isDone
        };
        this.onEdit = this.onEdit.bind(this);
    }

    onEdit(){
        this.setState({
            editing: !this.state.editing
        });
    }

    render(){
        const { title, isDone } = this.state;
        if(this.state.editing){
            return(
                <CreateEditItem title = { title } isDone={ isDone } onCancel={ this.onEdit }/>
            );
        }
        return(
            <SingleItemCardElements title={title} isDone={isDone} onEdit={this.onEdit} />           
        );
    }
}

export default SingleItemCard;