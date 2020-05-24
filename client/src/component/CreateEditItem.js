import React, { Component } from 'react';
import axios from 'axios';

class CreateEditItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.title || '',
            isDone: props.isDone || false
        };
        this.onChangeItem = this.onChangeItem.bind(this);
    }

    onChangeItem(event){
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    render(){
        const { title, isDone } = this.state;
        return (
            <form>
                <div className="form-group">
                    <label hrmlFor="title">Title fo todo</label>
                    <input name="title" type="text" className="form-control" id="title" value={title} onChange={this.onChangeItem} />
                </div>
                <div className="form-group">
                    <label hrmlFor="isDone">Todo complited?</label>
                    <select name="isDone" className="form-control" id="is-done" value={isDone} onChange={this.onChangeItem}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <button type="button" className="btn btn-danger" onClick={this.props.onCancel}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default CreateEditItem;