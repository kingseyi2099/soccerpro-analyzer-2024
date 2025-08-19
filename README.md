# SoccerPro Analyzer - Flask Backend

## Overview
SoccerPro Analyzer is a web application designed to track player statistics, predict match results, and visualize data related to soccer. This README provides information specific to the Flask backend of the application.

## Features
- **Player Stats Tracker**: Input and store player statistics such as goals, assists, passes, tackles, and saves.
- **Match Predictor**: Predict match outcomes based on historical data and player statistics.
- **Data Visualization**: Generate interactive charts to visualize player performance and match predictions.

## Getting Started

### Prerequisites
- Python 3.x
- Flask
- SQLite (or any other database of your choice)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd SoccerPro Analyzer/backend/flask
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

3. Set up the database:
   - Run the SQL schema located in `db/schema.sql` to create the necessary tables.

### Running the Application
To start the Flask server, run:
```
python -m flask run
```
Make sure to set the `FLASK_APP` environment variable to `app` before running the command.

### API Endpoints
- **GET /api/stats**: Retrieve player statistics.
- **POST /api/stats**: Submit new player statistics.
- **GET /api/predict**: Get match predictions based on input data.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
