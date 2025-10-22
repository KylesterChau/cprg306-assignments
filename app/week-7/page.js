"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    function handleAdditem(NewItem) {
        setItems([...items, NewItem]);
    }
    return (
        <main className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen py-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-center text-3xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
                    Shopping List
                </h1>
                <NewItem onAddItem={handleAdditem} />
                <ItemList items={items}/>
            </div>
        </main>
    );
}