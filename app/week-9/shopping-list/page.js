"use client";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useRouter } from "next/navigation";

export default function Page() {
    const { user, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const router = useRouter();

    function handleAddItem(NewItem) {
        setItems([...items, NewItem]);
    }
function handleItemSelect(item) {
    const cleanName = item.name.replace(/([\uE000-\uF8FF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, '');
    setSelectedItemName(cleanName.trim());
}
  async function handleLogout() {
    try{
      await firebaseSignOut();
      router.push("/week-9");
    }
    catch(error){
      console.error("Error during sign-out:", error);
    }
    }
    if (!user) {
        return null;
    }
    return (
    <main className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen py-10">
        <button onClick={handleLogout} className="w-25 h-14 m-3 flex items-center justify-center rounded-md border bg-blue-700 text-white hover:bg-gray-200 hover:text-black text-xl font-bold">Logout</button>
        <div className="flex flex-row justify-center gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-center text-3xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
                    Shopping List
                </h1>
                <div>
                    <NewItem onAddItem={handleAddItem} />
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