import React, { Component } from 'react';
import ListItems from './ListItems';
import ListItem from './ListItem';
import axios from 'axios';
import _ from 'lodash';

class ItemsBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            todos: {}
        };
    }

    componentDidMount() {
        axios.get('/api/todo').then(res => {
            console.log(res);
            this.setState({
                loading: false,
                todos: res.data
            });
        });
    }

    render(){
        if(this.state.loading === true){
            return(
                <h1>Loading ...</h1>
            );
        }
        return(
            <ListItems>
                {this.renderTodos()}
            </ListItems>
        );
    }
    
    renderTodos() {
        return _.map(this.state.todos, todo => {
            return(
                <ListItem title={todo.title} isDone={todo.is_done} />
            );
        });
    }
}

export default ItemsBody;