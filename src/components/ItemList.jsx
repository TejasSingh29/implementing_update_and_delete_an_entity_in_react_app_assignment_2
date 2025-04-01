import React, { useState } from 'react';
import Item from './Item';

const ItemList = () => {
    const [doors, setDoors] = useState([
        { id: "1", name: "Front Door", status: "open" },
        { id: "2", name: "Back Door", status: "closed" },
    ]);

    const handleDelete = (id) => {
        setDoors(doors.filter((door) => door.id !== id));
    };

    const handleEdit = (id) => {
        const newName = prompt("Enter new door name:");
        if (newName) {
            setDoors(doors.map((door) => (door.id === id ? { ...door, name: newName } : door)));
        }
    };

    return (
        <div>
            {doors.map((door) => (
                <Item key={door.id} item={door} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
        </div>
    );
};

export default ItemList;
1