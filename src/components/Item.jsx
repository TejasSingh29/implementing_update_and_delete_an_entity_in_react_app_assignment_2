import React from 'react';

const Item = ({ item, onDelete, onEdit }) => {
    // Render a single item with Edit and Delete buttons
    return (
        <div className="item">
            <h3>{item.name}</h3>
            <p>Status: {item.status}</p>
            <button onClick={() => onEdit(item.id)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
};

export default Item;
