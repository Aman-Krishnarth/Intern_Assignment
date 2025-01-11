import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const addItem = (e) => {
    e.preventDefault();

	if(!item.trim().length){
		setItem("")
		return ;
	}

    setItems([...items, item]);
    setItem("");
  };

  const ulStyle = {
    listStyleType: "square", // Correct way to apply square bullets
    padding: "10px",          // Optional: padding for spacing
    backgroundColor: "#f0f0f0" // Optional: background color
  };

  return (
    <div>
      <header className="bg-[#1b1445] flex justify-center items-center">
        <div className="h-28 w-28 flex items-center">
          <img
            src="https://imgs.search.brave.com/wOjH5xwfYtdGCFlkOkcAT0XIjANOQw-QBaDOoZQQJZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhlb3JnLmNvbS85/NjFjNWRhNy1lODg3/LTRhOTctODY1NS1h/N2QyY2M0MDM0NGVf/dGh1bWIuanBn"
            alt=""
            className="h-[75%] w-[75%]"
          />
        </div>
        <h1 className="text-green-700 text-xl font-bold">Item List Manager</h1>
      </header>

      <h1 className="my-12 text-3xl font-bold px-6">Item List</h1>

      <input
        type="text"
        placeholder="Enter Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="block w-[90%] bg-[#becfcf] m-auto p-2 text-lg font-medium outline-none rounded"
      />

      <button
        onClick={addItem}
        className="text-white bg-[green] w-1/2 block mx-auto my-5 py-4 text-xl font-semibold rounded"
      >
        Add item
      </button>

      <ul className="list-disc pl-5 mx-10 text-xl mt-10 font-semibold">
        {items.map((it, index) => {
          return <li key={index}>{it}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
