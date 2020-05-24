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

    componentWillMount(){
        const id = this.props.match.params.id;
        axios.get(`/api/todo/${id}`).then(res => {
            this.setState({
                loading: false,
                todo: res.data
            });
        });
    }

    render(){
        console.log(this.state.todo);
        if(this.state.loading){
            return(
                <h3>Loading ...</h3>
            );
        }
        return(
            <SingleItemCard />
        )
    }
}

export default SingleItem;