"use client";
import { useState, useMemo } from "react";
import Item from "./item";

export default function ItemList({ items }) {

    const [sortBy, setSortby] = useState("name");
  const sortedItems = useMemo(() => {
    const itemList = [...items];
    return itemList.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  }, [items, sortBy]);

    return (
        <main>
            <div className="flex gap-4 mt-4 justify-center">
                <h1 className="text-white">Sort by: </h1>
                <button onClick={() => {setSortby("name")}} disabled={sortBy === "name"} className="w-25 h-14 flex items-center justify-center rounded-md border bg-blue-700 text-white hover:bg-gray-200 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">name</button>
                <button onClick={() => {setSortby("category")}} disabled={sortBy === "category"} className="w-25 h-14 flex items-center justify-center rounded-md border bg-blue-700 text-white hover:bg-gray-200 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold">category</button>
            </div>
            <ul>
                {sortedItems.map((item, index) => (
                    <li key={index}>
                        <Item name={item.name} quantity={item.quantity} category={item.category}></Item> 
                    </li>
                ))}
            </ul>
        </main>
    );
}