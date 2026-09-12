// find HTML elements and store them in JS
const foodForm = document.getElementById("food-form");
const foodNameInput = document.getElementById("food-name");
const caloriesInput = document.getElementById("calories");
const foodList = document.getElementById("food-list");
const totalCalories = document.getElementById("total-calories");
const clearButton = document.getElementById("clear-button");

//store the total calories in a variable
let total = 0;

// store the food items in an array
let foods = [{ name: "Apple", calories: 95 }, 
    { name: "Banana", calories: 105 }, 
    { name: "Orange", calories: 62 }
];

// function to update the total calories display
function updateTotal() {
    totalCalories.textContent = total;
}

//function to remove a food item from the list and update the total calories
function removeFood(foodItem, calories) {
    //subtract the calories of the deleted item from the total
    total = total - calories;
    //remove the food item from the list
    foodItem.remove();
    // update the total calories display
    updateTotal();
}

// function to add a food item to the list and update the total calories
function addFood(name, calories) {
    // create a new HTML list item element using JS
    const foodItem = document.createElement("li");
    //give the list item text content
    foodItem.textContent = name + " - " + calories + " calories";

    //create delete button
    const deleteButton = document.createElement("button");
    //give the delete button text content
    deleteButton.textContent = "Delete";

    // append the delete button to the list item
    foodItem.appendChild(deleteButton);
    // append(put) the list item to the food list
    foodList.appendChild(foodItem);

    // calculate total calories
    total = total + calories;
    // add the food item to the foods array
    foods.push({ name: name, calories: calories });
    // store the foods array in local storage
    localStorage.setItem("foods", JSON.stringify(foods));
    // update the total calories display
    updateTotal();

    // add event listener to the delete button
    deleteButton.addEventListener("click", function () {
        removeFood(foodItem, calories);
    });
}


// add event listener to the form submission
foodForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // get the values from the input fields
    const name = foodNameInput.value;
    const calorieAmount = caloriesInput.value;
    const calories = Number(calorieAmount);

    // validate the input values
    addFood(name, calories);

    // clear the input fields
    foodNameInput.value = "";
    caloriesInput.value = "";
});

// add event listener to the clear button
clearButton.addEventListener("click", function () {
    // clear the food list
    foodList.innerHTML = "";
    // reset the total calories
    total = 0;
    updateTotal();
});