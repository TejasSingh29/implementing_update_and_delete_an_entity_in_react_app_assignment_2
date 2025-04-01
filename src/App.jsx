import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://localhost:8000/doors`;

function App() {
  const [items, setItems] = useState([]);

  // Fetch the existing items from the server
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URI);
        if (response.ok) {
          const data = await response.json();
          setItems(data); // Store doors data in state
        } else {
          console.error("Failed to fetch doors");
        }
      } catch (error) {
        console.error("Error fetching doors:", error);
      }
    };

    fetchItems();
  }, []);

  // Handle deletion of an item
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove deleted door from the list in state
        setItems(items.filter(item => item.id !== id));
      } else {
        console.error("Failed to delete door");
      }
    } catch (error) {
      console.error("Error deleting door:", error);
    }
  };

  return <ItemList items={items} onDelete={handleDelete} />;
}

export default App;
