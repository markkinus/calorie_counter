// find HTML elements and store them in JS
const foodForm = document.getElementById("food-form");
const foodNameInput = document.getElementById("food-name");
const caloriesInput = document.getElementById("calories");
const foodList = document.getElementById("food-list");
const totalCalories = document.getElementById("total-calories");
const clearButton = document.getElementById("clear-button");

let total=0;

// add event listener to the clear button
clearButton.addEventListener("click", function () {
    totalCalories.textContent = "total";
    total = 0;
    foodList.innerHTML = "";
});

// add event listener to the form submission
foodForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // get the values from the input fields
    const name = foodNameInput.value;
    const calorieAmount = caloriesInput.value;
    const calories = Number(calorieAmount);

    console.log(name);
    console.log(calorieAmount);

// create a new list item
const foodItem = document.createElement("li");
//give the list item text content
foodItem.textContent = name + " - " + calorieAmount + " calories";
// append(put) the list item to the food list
foodList.appendChild(foodItem);

//calculate total calories
total = total + calories;

// update the total calories display
totalCalories.textContent = total;
});
