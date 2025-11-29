const panel = document.getElementById("nutritionPanel");

export function showNutritionPanel(nutritionData, recipeLabel) {

    panel.innerHTML = `
        <button id="closeNutrition" class="close-btn">✕</button>

        <h2>${recipeLabel}</h2>
        <p><strong>Total Calories:</strong> ${Math.round(nutritionData.calories)}</p>

        <h3>Macronutrients</h3>
        <ul>
            <li><strong>Protein:</strong> ${Math.round(nutritionData.totalNutrients.PROT?.quantity || 0)} g</li>
            <li><strong>Fat:</strong> ${Math.round(nutritionData.totalNutrients.FAT?.quantity || 0)} g</li>
            <li><strong>Carbs:</strong> ${Math.round(nutritionData.totalNutrients.CHOCDF?.quantity || 0)} g</li>
        </ul>

        <h3>Vitamins</h3>
        <ul>
            <li><strong>Vitamin C:</strong> ${Math.round(nutritionData.totalNutrients.VITC?.quantity || 0)} mg</li>
            <li><strong>Vitamin A:</strong> ${Math.round(nutritionData.totalNutrients.VITA_RAE?.quantity || 0)} µg</li>
        </ul>
    `;

    // Show panel
    panel.classList.remove("hidden");
    // Slide in
    panel.classList.add("open");

    // Close button
    document.getElementById("closeNutrition").addEventListener("click", () => {
        panel.classList.remove("open");
        setTimeout(() => {
            panel.classList.add("hidden");
        }, 300);
    });
}