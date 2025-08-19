import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PredictorUI = () => {
    const [matches, setMatches] = useState([]);
    const [predictions, setPredictions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get('/api/matches');
                setMatches(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching matches:', error);
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    const handlePredict = async () => {
        try {
            const response = await axios.post('/api/predict', { matches });
            setPredictions(response.data);
        } catch (error) {
            console.error('Error making predictions:', error);
        }
    };

    if (loading) {
        return <div>Loading matches...</div>;
    }

    return (
        <div>
            <h2>Match Predictor</h2>
            <button onClick={handlePredict}>Predict Matches</button>
            {predictions.length > 0 && (
                <div>
                    <h3>Predictions</h3>
                    <ul>
                        {predictions.map((prediction, index) => (
                            <li key={index}>
                                {prediction.homeTeam} vs {prediction.awayTeam}: {prediction.score}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PredictorUI;