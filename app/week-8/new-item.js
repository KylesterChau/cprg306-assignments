"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    function increment() {
  setQuantity(quantity + 1);
};
    function decrement() {
  setQuantity(quantity - 1);
};
function handleSubmit(event) {
  event.preventDefault();
const item = {
        id: Math.random().toString(36).substring(2, 9),
        name: name,
        quantity: quantity,
        category: category
};
  console.log(item);
  onAddItem(item);

  setName('');
  setQuantity(1);
  setCategory("produce");
};

return (
        <form onSubmit={handleSubmit} className="border-2 rounded-lg p-6 max-w-md mx-auto text-white">
                <div className="flex flex-col">
                        <label htmlFor="itemName">Item Name</label>
                        <input type="text" id="itemName" name="nameOfItem" value={name} className="border" onChange={(event) => setName(event.target.value)} placeholder="eg. Milk" required/>
                </div>
                <div>
                        <p>Quantity (1-20)</p>
                        <label htmlFor="quantity">Current: {quantity}</label>
                        <div className="flex gap-4 mt-4 m-3 justify-center">
                                <button type="button" onClick={decrement} disabled={quantity === 1} className="w-14 h-14 flex items-center justify-center rounded-md border bg-red-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">
                                        -
                                </button>
                                <button type="button" onClick={increment} disabled={quantity === 20} className="w-14 h-14 flex items-center justify-center rounded-md border bg-green-400 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">
                                        +
                                </button>
                        </div>
                </div>
                <div className="">
                        <label htmlFor="category">category:</label>
                        <select id="category" name="category" className="border" onChange={(event) => setCategory(event.target.value)}>
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat">Meat</option>
                                <option value="pantry">Pantry</option>
                                <option value="frozen">Frozen</option>
                                <option value="other">Other</option>
                        </select>
                </div>
                <button type="submit" className="border m-2 p-2">Submit</button>
        </form>
);
}