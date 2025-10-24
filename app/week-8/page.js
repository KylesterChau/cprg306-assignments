"use client";
import { use, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleAdditem(NewItem) {
        setItems([...items, NewItem]);
    }
function handleItemSelect(item) {
    const cleanName = item.name.replace(/([\uE000-\uF8FF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, '');
    setSelectedItemName(cleanName.trim());
}

    return (
    <main className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen py-10">
        <div className="flex flex-row justify-center gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-center text-3xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
                    Shopping List
                </h1>
                <div>
                    <NewItem onAddItem={handleAdditem} />
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
            </div>
            <div className="text-white p-8 w-full max-w-md">
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </div>
    </main>
);
}