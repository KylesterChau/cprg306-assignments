"use client";
import { useState } from "react";

export default function NewItem() {
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
        name: name,
        quantity: quantity,
        category: category
};
  console.log(item);
  alert(`Name: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`);
};

return (
        <form onSubmit={handleSubmit} className="border-2">
                <div className="flex flex-col">
                        <label for="itemName">Item Name</label>
                        <input type="text" id="itemName" name="itemname" className="border-2" onChange={(event) => setName(event.target.value)} placeholder="eg. Milk" required/>
                </div>
                <div>
                        <p>Quantity (1-20)</p>
                        <label for="quantity">Current: {quantity}</label>
                        <div className="flex gap-4 mt-4 justify-center">
                                <button type="button" onClick={decrement} disabled={quantity === 1} className="w-14 h-14 flex items-center justify-center rounded-md border bg-red-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">
                                        -
                                </button>
                                <button type="button" onClick={increment} disabled={quantity === 20} className="w-14 h-14 flex items-center justify-center rounded-md border bg-green-400 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">
                                        +
                                </button>
                        </div>
                </div>
                <div className="">
                        <label for="category">category:</label>
                        <select id="category" name="category" className="border-2" onChange={(event) => setCategory(event.target.value)}>
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat">Meat</option>
                                <option value="pantry">Pantry</option>
                                <option value="frozen">Frozen</option>
                                <option value="other">Other</option>
                        </select>
                </div>
                <button type="submit">Submit</button>
        </form>
);
}