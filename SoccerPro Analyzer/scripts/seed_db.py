import sqlite3

def seed_database():
    # Connect to the SQLite database
    conn = sqlite3.connect('db/soccer_pro_analyzer.db')
    cursor = conn.cursor()

    # Create tables if they don't exist
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        position TEXT NOT NULL,
        goals INTEGER DEFAULT 0,
        assists INTEGER DEFAULT 0,
        matches_played INTEGER DEFAULT 0
    )
    ''')

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS matches (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        team_a TEXT NOT NULL,
        team_b TEXT NOT NULL,
        score_a INTEGER NOT NULL,
        score_b INTEGER NOT NULL
    )
    ''')

    # Sample data for players
    players = [
        ('Lionel Messi', 'Forward'),
        ('Cristiano Ronaldo', 'Forward'),
        ('Neymar Jr', 'Forward'),
        ('Kevin De Bruyne', 'Midfielder'),
        ('Virgil van Dijk', 'Defender')
    ]

    # Insert sample players into the database
    cursor.executemany('INSERT INTO players (name, position) VALUES (?, ?)', players)

    # Sample data for matches
    matches = [
        ('2023-09-01', 'Team A', 'Team B', 2, 1),
        ('2023-09-02', 'Team C', 'Team D', 0, 0),
        ('2023-09-03', 'Team E', 'Team F', 3, 2)
    ]

    # Insert sample matches into the database
    cursor.executemany('INSERT INTO matches (date, team_a, team_b, score_a, score_b) VALUES (?, ?, ?, ?, ?)', matches)

    # Commit changes and close the connection
    conn.commit()
    conn.close()

if __name__ == '__main__':
    seed_database()