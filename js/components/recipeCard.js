import { analyzeIngredients } from "../api/nutrition.js";
import { showNutritionPanel } from "./nutritionPanel.js";
import { saveFavorite } from "../utils/storage.js";

export function createRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipe-card", "fade-in");

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.label}" class="recipe-img">
        <h3>${recipe.label}</h3>
        <p><strong>Calories:</strong> ${Math.round(recipe.calories)}</p>

        <button class="view-nutrition-btn">View Nutrition</button>
        <button class="save-fav-btn">Save to Favorites ❤️</button>
    `;

    // Handle "View Nutrition"
    const viewButton = card.querySelector(".view-nutrition-btn");
    viewButton.addEventListener("click", async () => {
        try {
            const ingredients = recipe.ingredientLines;  
            const nutrition = await analyzeIngredients(ingredients);
            showNutritionPanel(nutrition, recipe.label);
        } catch (err) {
            alert("Unable to load nutrition data right now.");
        }
    });

    // Handle Favorites
    const saveBtn = card.querySelector(".save-fav-btn");
    saveBtn.addEventListener("click", () => {
        saveFavorite(recipe);
        alert(`${recipe.label} saved to favorites!`);
    });

    return card;
}