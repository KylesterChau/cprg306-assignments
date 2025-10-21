"use client";
import items from "./items.json";
import { useState } from "react";
import Item from "./item";

export default function ItemList() {

    const [sortby, setSortby] = useState("name");

    const sortedItems = () => {
        return [...items].sort((a, b) => {
            if (sortby === "name") {
                return a.name.localeCompare(b.name);
            } else if (sortby === "category") {
                return a.category.localeCompare(b.category);
            }
        });
    }

    return (
        <main>
            <div className="flex gap-4 mt-4 justify-center">
                <h1 className="text-white">Sort by: </h1>
                <button onClick={() => {setSortby("name")}} disabled={sortby === "name"} className="w-25 h-14 flex items-center justify-center rounded-md border bg-blue-700 text-white hover:bg-gray-200 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">name</button>
                <button onClick={() => {setSortby("category")}} disabled={sortby === "category"} className="w-25 h-14 flex items-center justify-center rounded-md border bg-blue-700 text-white hover:bg-gray-200 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">category</button>
            </div>
            <ul>
                {sortedItems().map((item, id) => (
                    <li key={id}>
                        <Item name={item.name} quantity={item.quantity} category={item.category}></Item> 
                    </li>
                ))}
            </ul>
        </main>
    );
}