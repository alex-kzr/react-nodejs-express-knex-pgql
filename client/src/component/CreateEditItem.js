import React, { Component } from 'react';
import axios from 'axios';

class CreateEditItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.title || '',
            isDone: props.isDone || false
        };
    }

    render(){
        return (
            <form>
                <div>CreateEdit component</div>
            </form>
        );
    }
}

export default CreateEditItem;