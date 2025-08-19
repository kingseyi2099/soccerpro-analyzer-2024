# SoccerPro Analyzer - Node.js Backend

This is the Node.js backend for the SoccerPro Analyzer project. The backend is responsible for handling API requests related to player statistics and match predictions.

## Features

- **Player Stats Tracking**: Input and retrieve player statistics such as goals, assists, passes, tackles, and saves.
- **Match Prediction**: Predict match outcomes based on historical data and player statistics.
- **Data Visualization**: Provide endpoints for the frontend to visualize player performance and match predictions.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd SoccerPro Analyzer/backend/node
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the server, run:
```
npm start
```

The server will be running on `http://localhost:3000` by default.

### API Endpoints

- **GET /api/players**: Retrieve a list of players.
- **POST /api/players**: Add a new player.
- **GET /api/matches**: Retrieve match statistics.
- **POST /api/predict**: Get match predictions based on input data.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.