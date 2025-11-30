export async function analyzeIngredients(ingredientsList) {
    const appId = "759a9f86";   
    const appKey = "ba2d23594e77b0cbc8c8fc6c40d2f9c7";

    const url = `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${appKey}`;

    const body = {
        ingr: ingredientsList
    };

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error("Nutrition analysis failed");
    }

    return await response.json();
}
