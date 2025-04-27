# Calculator Project

A simple yet functional calculator built with vanilla JavaScript, following modern web development practices.

## Task

[Link to the task document](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0)

## How to run the app

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   git clone https://github.com/LegerovAlex/Calculator.git

2. Navigate to the project directory:

   cd calculator

3. Install all dependencies:

   npm install

4. Development Mode:

   npm start

   This will start the Webpack development server and open the app in development mode.

5. Development Mode:

   npm run build

   This will create the optimized, production-ready version of the app in the dist/ folder.

### Project Structure

src/: Contains all the source code files.

components/: Contains components such as Button, Display, Calculator, etc.

constants/: Stores all constant values like button styles and button configurations.

utils/: Contains utility functions such as createElement, render, updateDisplay.

logic/: Handles the logic for the calculator operations .

state/: Stores the application state, such as current and previous values.
