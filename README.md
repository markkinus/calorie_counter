# Calorie Counter

## Introduction to the Project

The **Calorie Counter** is a web-based application designed to help users keep track of the calories in the foods they consume.

The project was developed using **HTML5**, **CSS3**, and **JavaScript**. It also uses the **Fetch API** to retrieve calorie information and **localStorage** to save food data in the browser.

The application provides a simple and user-friendly interface where users can enter a food name, retrieve its calorie information, add it to a food list, and monitor their total calorie intake.

## Project Overview

The Calorie Counter allows users to record the foods they consume and keep track of their total calorie intake.

When a user enters a food name, the application uses the **Fetch API** to request nutrition information from the **CalorieNinjas API**. The returned calorie value is displayed and added to the food list.

The application also uses **localStorage** to save food data so that the information remains available when the page is refreshed.

## Problem Statement

Keeping track of daily calorie intake manually can be difficult and time-consuming. Users may forget the foods they have consumed, their calorie values, or the total amount of calories consumed during the day.

There is a need for a simple digital solution that allows users to record their food intake, obtain calorie information, and calculate their total calories without performing the calculations manually.

## Solution

The **Calorie Counter** provides a simple solution by allowing users to enter the name of a food and automatically retrieve its calorie information through an API.

The application:

1. Retrieves the calorie information.
2. Displays the food and its calories.
3. Adds the food to the food list.
4. Calculates the total calories.
5. Allows individual foods to be removed.
6. Allows the entire food list to be reset.
7. Saves food data using **localStorage**.

This makes calorie tracking easier, faster, and more organized.

## Features

- **Add Food:** Allows users to add food items to the food list.
- **Calorie Lookup:** Automatically retrieves calorie information using the CalorieNinjas API.
- **Food List:** Displays the foods added by the user.
- **Total Calories:** Calculates and displays the total calories.
- **Remove Food:** Allows users to remove individual food items.
- **Reset:** Clears the food list and resets the total calories.
- **Local Storage:** Saves food data in the browser.
- **Data Persistence:** Restores saved food data after refreshing the page.
- **Responsive UI:** Provides a simple and user-friendly interface.
- **DOM Manipulation:** Uses JavaScript to dynamically create and update HTML elements.
- **Fetch API:** Communicates with an external API to retrieve calorie information.

## Technologies Used

- **HTML5** - Used to create the structure of the application.
- **CSS3** - Used to style the application and create a responsive interface.
- **JavaScript (ES6+)** - Used to add functionality and interactivity.
- **DOM Manipulation** - Used to dynamically update the webpage.
- **Fetch API** - Used to retrieve calorie information.
- **LocalStorage** - Used to store food data in the browser.
- **JSON** - Used to store and exchange data.
- **Git & GitHub** - Used for version control and collaboration.

## File Structure

```text
calorie-counter/
│
├── index.html
├── style.css
├── script.js
├── foods.json
├── README.md

### `index.html`

Contains the structure and content of the Calorie Counter application, including:

- Food input form
- Calories field
- Add Food button
- Food list
- Total calories display
- Reset button

### `style.css`

Contains the styling for the application, including:

- Page layout
- Form styling
- Input fields
- Buttons
- Food list
- Responsive design
- Colors, spacing, and typography

### `script.js`

Contains the JavaScript functionality of the application, including:

- DOM element selection
- Event listeners
- Adding food items
- Removing food items
- Calculating total calories
- Fetch API requests
- LocalStorage
- Reset functionality

### `foods.json`

Contains food-related data that can be used to simulate or provide food information during development.

### `README.md`

Contains documentation about the project, including:

- Project purpose
- Features
- Setup instructions
- Contribution guidelines
- License information

## 7. Installation and Setup Process

### Step 1: Clone the Repository

Clone the project from GitHub using:

```bash
git clone https://github.com/markkinus/calorie-counter.git
```

### Step 2: Navigate to the Project Folder

Navigate to the project folder using:

```bash
cd calorie-counter
```

### Step 3: Open the Project

Open the project folder in **Visual Studio Code**.

### Step 4: Run the Application

Open `index.html` in a web browser.

For development, you can also use the **Live Server** extension in Visual Studio Code.

### Step 5: API Setup

The application uses the **CalorieNinjas API** to retrieve calorie information.

An API key is required for API requests. Add your API key to the appropriate location in `script.js`.

> **Important:** Do not commit or upload your API key to GitHub.

## 8. How to Contribute and Collaborate

Contributions and collaboration are welcome.

### Step 1: Fork the Repository

Fork the project repository to your own GitHub account.

### Step 2: Clone Your Fork

```bash
git clone https://github.com/your-username/calorie-counter.git
```

### Step 3: Create a New Branch

```bash
git checkout -b feature-name
```

### Step 4: Make Your Changes

Make improvements or add new features to the project.

### Step 5: Commit Your Changes

Use a clear commit message:

```bash
git add .
git commit -m "feat: add food calorie tracking"
```

### Step 6: Push Your Branch

```bash
git push origin feature-name
```

### Step 7: Create a Pull Request

Create a **Pull Request** on GitHub explaining the changes you made.

### Contributors Should:

- Keep the code organized.
- Use meaningful commit messages.
- Test changes before submitting them.
- Avoid committing API keys or other sensitive information.
- Clearly describe changes in Pull Requests.
- Collaborate with other contributors respectfully.

## 9. License

This project is licensed under the **MIT License**.

The MIT License allows others to use, modify, and distribute the project while providing appropriate credit.

See the [`LICENSE`](LICENSE) file for the complete license terms.