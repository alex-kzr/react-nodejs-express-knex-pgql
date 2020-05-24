import React, { Component } from 'react';
import axios from 'axios';
import SingleItemCard from './SingleItemCard';

class SingleItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            todo: {}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/api/todo/${id}`).then(res => {
            this.setState({
                loading: false,
                todo: res.data
            });
        });
    }

    render(){
        if(this.state.loading){
            return(
                <h3>Loading ...</h3>
            );
        }
        return(
            <SingleItemCard title={this.state.todo.title} isDone={this.state.todo.is_done} />
        )
    }
}

export default SingleItem;