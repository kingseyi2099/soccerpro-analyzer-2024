import React from 'react';

const StatsTable = ({ playerStats }) => {
    return (
        <div className="stats-table">
            <h2>Player Statistics</h2>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Passes</th>
                        <th>Tackles</th>
                        <th>Saves</th>
                    </tr>
                </thead>
                <tbody>
                    {playerStats.map((stat, index) => (
                        <tr key={index}>
                            <td>{stat.playerName}</td>
                            <td>{stat.goals}</td>
                            <td>{stat.assists}</td>
                            <td>{stat.passes}</td>
                            <td>{stat.tackles}</td>
                            <td>{stat.saves}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StatsTable;