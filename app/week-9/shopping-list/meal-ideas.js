"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMealIdeas() {
            if (!ingredient) return;
            const mealResults = await fetchMealIdeas(ingredient);
            setMeals(mealResults);
        }
        loadMealIdeas();
    }, [ingredient]);
    
    return (
        <div>
        <h2 className="text-center text-xl font-bold text-white">
            Meal Ideas for {ingredient ? `"${ingredient}"` : "(Please select one)"}
        </h2>

        <ul>
            {meals.length === 0 ? (
            <p className="text-white">No meals found</p>
            ) : (
            meals.map((meal) => (
                <li
                key={meal.idMeal}
                className="border-2 border-gray-700 rounded-lg m-2 p-2 flex flex-col items-center font-sans bg-gray-500 text-white"
                >
                <h3 className="text-center">{meal.strMeal}</h3>
                </li>
            ))
            )}
        </ul>
        </div>

    );
}
