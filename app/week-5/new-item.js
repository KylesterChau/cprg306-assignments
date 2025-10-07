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
  const data = {}
};

return (
        <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <p>Quantity (1-20)</p>
                <label for="quantity">Current: {quantity}</label>
            <div className="flex gap-4 mt-4">
                    <button onClick={decrement} disabled={quantity === 1} className="w-14 h-14 flex items-center justify-center rounded-md border bg-red-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">
                            -
                    </button>
                    <button onClick={increment} disabled={quantity === 20} className="w-14 h-14 flex items-center justify-center rounded-md border bg-green-400 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">
                            +
                    </button>
            </div>
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Submit</button>
        </div>
);
}