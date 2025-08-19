# API Documentation for SoccerPro Analyzer

## Overview
The SoccerPro Analyzer API provides endpoints for tracking player statistics, predicting match results, and retrieving data visualizations. This document outlines the available API endpoints, their request methods, parameters, and response formats.

## Base URL
The base URL for the API is:
- For Flask: `http://localhost:5000/api`
- For Node.js: `http://localhost:3000/api`

## Endpoints

### 1. Player Statistics

#### GET /players
- **Description**: Retrieve a list of all players and their statistics.
- **Response**:
  - Status: 200 OK
  - Body: 
    ```json
    [
      {
        "id": 1,
        "name": "Player Name",
        "goals": 10,
        "assists": 5,
        "passes": 200,
        "tackles": 15,
        "saves": 0
      },
      ...
    ]
    ```

#### POST /players
- **Description**: Add a new player and their statistics.
- **Request Body**:
  ```json
  {
    "name": "Player Name",
    "goals": 0,
    "assists": 0,
    "passes": 0,
    "tackles": 0,
    "saves": 0
  }
  ```
- **Response**:
  - Status: 201 Created
  - Body: 
    ```json
    {
      "id": 1,
      "name": "Player Name",
      "goals": 0,
      "assists": 0,
      "passes": 0,
      "tackles": 0,
      "saves": 0
    }
    ```

### 2. Match Predictions

#### GET /predictions
- **Description**: Retrieve match predictions based on historical data.
- **Response**:
  - Status: 200 OK
  - Body: 
    ```json
    [
      {
        "match_id": 1,
        "predicted_score": "2-1",
        "win_probability": {
          "team_a": 70,
          "team_b": 30
        }
      },
      ...
    ]
    ```

### 3. Data Visualization

#### GET /charts
- **Description**: Retrieve data for visualizations (e.g., performance trends).
- **Response**:
  - Status: 200 OK
  - Body: 
    ```json
    {
      "line_graph_data": [
        {
          "date": "2023-01-01",
          "goals": 2
        },
        ...
      ],
      "bar_chart_data": {
        "season": "2023",
        "wins": 15,
        "draws": 5,
        "losses": 10
      }
    }
    ```

## Error Handling
- **Response Format**:
  ```json
  {
    "error": "Error message"
  }
  ```
- Common status codes:
  - 400 Bad Request
  - 404 Not Found
  - 500 Internal Server Error

## Conclusion
This API documentation provides a comprehensive overview of the endpoints available in the SoccerPro Analyzer project. For further details on implementation or usage, please refer to the respective backend documentation.