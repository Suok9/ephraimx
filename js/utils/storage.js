const FAVORITES_KEY = "favoriteRecipes";

export function saveFavorite(recipe) {
    const favorites = loadFavorites();
    favorites.push(recipe);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function loadFavorites() {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
}

export function removeFavorite(label) {
    const favorites = loadFavorites().filter(r => r.label !== label);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}