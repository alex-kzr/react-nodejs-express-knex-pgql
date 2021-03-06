import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const SingleItemCardElements = ({ title, isDone, onEdit, id, history }) => {
    return(
        <div className={`card ${isDone ? 'bg-success' : 'bg-danger'} text-white`}>
            <div className="card-block">
                <div className="card-title">
                    <h4>{ title }</h4>
                </div>
                <div className="card-text">
                    { isDone ? 'This todo has been completed' : 'This todo has yet to be finished'}
                </div>
                <div className="d-flex justify-content-between ilign-items-end mt-5">
                    <button className="btn btn-link text-white" onClick={() => {
                        axios.delete(`/api/todo/${id}`).then(() => {
                            history.push('/')
                        });
                    }}>Delete</button>
                    <button className="btn btn-link text-white" onClick={onEdit}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SingleItemCardElements);