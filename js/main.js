import { searchRecipes } from "./api/recipes.js";
import { createRecipeCard } from "./components/recipeCard.js";
import { loadFavorites, removeFavorite } from "./utils/storage.js";



const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsSection = document.getElementById("results");

const viewFavoritesBtn = document.getElementById("viewFavoritesBtn");
const favoritesSection = document.getElementById("favoritesSection");
const favoritesList = document.getElementById("favoritesList");

const loadingSpinner = document.getElementById("loadingSpinner");


// SEARCH BUTTON 
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    
    if (!query) {
        alert("Please enter a search term.");
        return;
    }
    
    loadRecipes(query);
});



async function loadRecipes(query) {
    
    
    loadingSpinner.classList.remove("hidden");
    
    try {
        
        const data = await searchRecipes(query);
        
        
        resultsSection.innerHTML = "";
        
        
        if (data.hits.length === 0) {
            resultsSection.innerHTML = `
                <p class="no-results">No recipes found. Try another search term.</p>
            `;
            return;
        }
        
        
        data.hits.forEach(item => {
            const card = createRecipeCard(item.recipe);
            resultsSection.appendChild(card);
        });
        
    } catch (error) {
        
        resultsSection.innerHTML = `
            <p class="error-message">Something went wrong while fetching recipes. Please try again later.</p>
        `;
        console.error("Error loading recipes:", error);
    }
    
    loadingSpinner.classList.add("hidden");
}



// FAVORITES BUTTON 
viewFavoritesBtn.addEventListener("click", () => {
    const favorites = loadFavorites();
    
    favoritesList.innerHTML = "";
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <p class="no-results">You have no saved favorite recipes.</p>
        `;
    } else {
        favorites.forEach(recipe => {
            const card = document.createElement("div");
            card.classList.add("recipe-card");
            
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.label}" class="recipe-img">
                <h3>${recipe.label}</h3>
                <p><strong>Calories:</strong> ${Math.round(recipe.calories)}</p>

                <button class="remove-btn">Remove ❌</button>
            `;

            // Remove button logic
            card.querySelector(".remove-btn").addEventListener("click", () => {
                removeFavorite(recipe.uri);  
                card.remove();  
            });
            
            favoritesList.appendChild(card);
        });
    }
    
    favoritesSection.classList.toggle("hidden");
});