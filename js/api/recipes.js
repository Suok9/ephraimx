 export async function searchRecipes(query) {
    const appId = "82e453da"; 
    const appKey = "3bb5d1a3b992f408b9003effd74c9c22"; 
    
    const url = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${appId}&app_key=${appKey}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error("Failed to fetch recipes from Edamam API");
    }
    
    return await response.json();
}
 
 
 
 
 
 
