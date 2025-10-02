"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
  setQuantity(quantity + 1);
};
    const decrement = () => {
  setQuantity(quantity - 1);
};
return (
    <section className="inline-block border m-4 p-6 bg-gray-100 text-lg">
            <p>Quantity: {quantity}</p>
            <div className="flex gap-4 mt-4">
                    <button onClick={decrement} disabled={quantity === 1} className="w-14 h-14 flex items-center justify-center rounded-md border bg-red-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">
                            -
                    </button>
                    <button onClick={increment} disabled={quantity === 20} className="w-14 h-14 flex items-center justify-center rounded-md border bg-green-400 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">
                            +
                    </button>
            </div>
            <p className="text-gray-600 text-sm mt-4">allowed range: 1-20</p>
    </section>
);
}