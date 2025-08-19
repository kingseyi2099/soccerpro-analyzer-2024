# SoccerPro Analyzer Frontend Documentation

## Overview
SoccerPro Analyzer is a web application designed to track player statistics, predict match results, and visualize data related to soccer performance. This documentation provides an overview of the frontend structure and how to get started with the application.

## Project Structure
The frontend of the SoccerPro Analyzer consists of the following key directories and files:

- **public/**
  - `index.html`: The main HTML file that serves as the entry point for the frontend application.

- **src/**
  - **css/**
    - `styles.css`: Contains the CSS styles for the frontend application, defining the layout and appearance of the UI components.
  - **js/**
    - `main.js`: The main JavaScript file that initializes the application and handles user interactions.
    - `api.js`: Contains functions for making API calls to the backend to fetch and send data.
  - **components/**
    - `StatsTable.js`: Exports a component that displays player statistics in a table format.
    - `Charts.js`: Exports a component that visualizes data using charts (line graphs, bar charts, etc.).
    - `PredictorUI.js`: Exports a component that provides the user interface for the match predictor feature.

- `package.json`: The configuration file for npm, listing the dependencies and scripts for the frontend application.

## Getting Started
To get started with the frontend application, follow these steps:

1. **Clone the Repository**
   Clone the SoccerPro Analyzer repository to your local machine.

2. **Navigate to the Frontend Directory**
   Change your directory to the frontend folder:
   ```
   cd SoccerPro Analyzer/frontend
   ```

3. **Install Dependencies**
   Run the following command to install the necessary dependencies:
   ```
   npm install
   ```

4. **Run the Application**
   Start the development server with:
   ```
   npm start
   ```

5. **Open in Browser**
   Open your web browser and navigate to `http://localhost:3000` to view the application.

## Features
- **Player Stats Tracker**: Input and track player statistics such as goals, assists, and more.
- **Match Predictor**: Predict match results based on historical data and player stats.
- **Data Visualization**: View performance trends and comparisons through interactive charts.

## Contributing
Contributions to the SoccerPro Analyzer project are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.