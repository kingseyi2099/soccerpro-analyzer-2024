from flask import Blueprint, request, jsonify
from .models import Player, Match
from .utils import calculate_prediction

app = Blueprint('app', __name__)

@app.route('/api/stats', methods=['GET', 'POST'])
def handle_stats():
    if request.method == 'POST':
        data = request.json
        new_player = Player(**data)
        new_player.save()
        return jsonify({"message": "Player stats added successfully!"}), 201
    else:
        players = Player.query.all()
        return jsonify([player.to_dict() for player in players]), 200

@app.route('/api/predict', methods=['POST'])
def predict_match():
    data = request.json
    prediction = calculate_prediction(data['team1_stats'], data['team2_stats'])
    return jsonify(prediction), 200

@app.route('/api/matches', methods=['GET'])
def get_matches():
    matches = Match.query.all()
    return jsonify([match.to_dict() for match in matches]), 200