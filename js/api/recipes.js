export async function searchRecipes(query) {
    const app_id = "41c6ae72";
    const app_key = "2a81d2423116ca876974f24f5cf9e8af";

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(query)}&app_id=${app_id}&app_key=${app_key}`;

    const response = await fetch(url);

    if (!response.ok) {
        const text = await response.text();
        console.error("API Error:", text);
        throw new Error("Failed to fetch recipes from Edamam API");
    }

    return await response.json();
}