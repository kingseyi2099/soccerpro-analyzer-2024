import csv
import requests
from backend.flask.app.models import Match  # Adjust the import based on your actual model structure
from backend.flask.app import db  # Adjust the import based on your actual app structure

def import_matches_from_csv(file_path):
    with open(file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            match = Match(
                home_team=row['home_team'],
                away_team=row['away_team'],
                home_score=row['home_score'],
                away_score=row['away_score'],
                date=row['date']
            )
            db.session.add(match)
        db.session.commit()

def import_matches_from_api(api_url):
    response = requests.get(api_url)
    matches = response.json()
    for match in matches:
        match_record = Match(
            home_team=match['homeTeam']['name'],
            away_team=match['awayTeam']['name'],
            home_score=match['score']['fullTime']['home'],
            away_score=match['score']['fullTime']['away'],
            date=match['date']
        )
        db.session.add(match_record)
    db.session.commit()

if __name__ == "__main__":
    # Example usage
    import_matches_from_csv('path/to/your/matches.csv')  # Update with actual path
    import_matches_from_api('https://api.football-data.org/v2/matches')  # Update with actual API URL