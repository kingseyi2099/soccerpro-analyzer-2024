def calculate_average_stats(stats):
    if not stats:
        return {}
    
    average_stats = {}
    for key in stats[0].keys():
        average_stats[key] = sum(stat[key] for stat in stats) / len(stats)
    
    return average_stats

def format_player_data(player):
    return {
        "name": player.name,
        "goals": player.goals,
        "assists": player.assists,
        "passes": player.passes,
        "tackles": player.tackles,
        "saves": player.saves,
    }

def parse_match_data(match_data):
    return {
        "home_team": match_data["home_team"],
        "away_team": match_data["away_team"],
        "home_score": match_data["home_score"],
        "away_score": match_data["away_score"],
        "date": match_data["date"],
    }

def calculate_prediction(home_stats, away_stats, weights=None):
    """
    Simple prediction: combine weighted averages of goals scored/conceded and form.
    Expects dicts with keys: 'avg_goals_for', 'avg_goals_against', 'form' (0..1).
    Returns dict: {'home_expected': float, 'away_expected': float, 'home_win_prob': float, ...}
    """
    if weights is None:
        weights = {'goals_for': 0.6, 'goals_against': 0.3, 'form': 0.1}

    def team_score(s):
        gf = s.get('avg_goals_for', 0)
        ga = s.get('avg_goals_against', 0)
        form = s.get('form', 0.5)
        return gf * weights['goals_for'] - ga * weights['goals_against'] + form * weights['form']

    home_score = team_score(home_stats)
    away_score = team_score(away_stats)

    # map score difference to expected goals (simple scaling)
    base = (home_stats.get('avg_goals_for', 1) + away_stats.get('avg_goals_for', 1)) / 2
    diff = home_score - away_score
    home_expected = max(0.1, base + diff * 0.4)
    away_expected = max(0.1, base - diff * 0.4)

    # simple probability mapping using softmax-like transform
    import math
    h = math.exp(home_score)
    a = math.exp(away_score)
    total = h + a + 1e-9
    home_win_prob = h / total
    away_win_prob = a / total
    draw_prob = max(0.0, 1.0 - home_win_prob - away_win_prob)

    return {
        'home_expected': round(home_expected, 2),
        'away_expected': round(away_expected, 2),
        'home_win_prob': round(home_win_prob, 3),
        'away_win_prob': round(away_win_prob, 3),
        'draw_prob': round(draw_prob, 3)
    }