import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

const Charts = ({ playerStats, matchPredictions }) => {
    const lineChartData = {
        labels: playerStats.map(stat => stat.date),
        datasets: [
            {
                label: 'Goals',
                data: playerStats.map(stat => stat.goals),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
            {
                label: 'Assists',
                data: playerStats.map(stat => stat.assists),
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
            },
        ],
    };

    const barChartData = {
        labels: ['Wins', 'Draws', 'Losses'],
        datasets: [
            {
                label: 'Match Results',
                data: [
                    matchPredictions.wins,
                    matchPredictions.draws,
                    matchPredictions.losses,
                ],
                backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(255,206,86,0.6)', 'rgba(255,99,132,0.6)'],
            },
        ],
    };

    const pieChartData = {
        labels: ['Win Probability', 'Draw Probability', 'Loss Probability'],
        datasets: [
            {
                data: [
                    matchPredictions.winProbability,
                    matchPredictions.drawProbability,
                    matchPredictions.lossProbability,
                ],
                backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(255,206,86,0.6)', 'rgba(255,99,132,0.6)'],
            },
        ],
    };

    return (
        <div>
            <h2>Player Performance Over Time</h2>
            <Line data={lineChartData} />

            <h2>Match Results Prediction</h2>
            <Bar data={barChartData} />

            <h2>Win/Draw/Loss Probability Distribution</h2>
            <Pie data={pieChartData} />
        </div>
    );
};

export default Charts;