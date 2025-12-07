const FAVORITES_KEY = "favoriteRecipes";

export function loadFavorites() {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveFavorite(recipe) {
    const favorites = loadFavorites();
    
    // For us to prevent duplicate favorites
    if (!favorites.some(r => r.uri === recipe.uri)) {
        favorites.push(recipe);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
}

export function removeFavorite(uri) {
    const updated = loadFavorites().filter(r => r.uri !== uri);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}