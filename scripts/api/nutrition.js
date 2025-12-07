export async function analyzeIngredients(ingredientsList) {
    const appId = "b2f0d879";   
    const appKey = "0a1818257115e160cf6b36653e441db7";

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
