import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = ({ title, isDone, id }) => {
    return(
        <Link to={`/${id}`} className={`list-group-item text-white mb-3 d-flex justify-content-center align-items-center ${isDone ? 'bg-success' : 'bg-danger'}`}>
            <h3>{ title } | { isDone ? "Done" : "Not done"}</h3>
        </Link>
    );
}

export default ListItem;