import React from 'react';

const ListItem = ({ title, isDone }) => {
    return(
        <li className={`list-group-item text-white mb-3 d-flex justify-content-center align-items-center ${isDone ? 'bg-success' : 'bg-danger'}`}>
            <h3>{ title } | { isDone ? "Done" : "Not done"}</h3>
        </li>
    );
}

export default ListItem;