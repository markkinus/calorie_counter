const foodForm = document.getElementById("food-form");
const foodNameInput = document.getElementById("food-name");
const caloriesInput = document.getElementById("calories");
const foodList = document.getElementById("food-list");
const totalCalories = document.getElementById("total-calories");
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function () {
    totalCalories.textContent = "clear";
});