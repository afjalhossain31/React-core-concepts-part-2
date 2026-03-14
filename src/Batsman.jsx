import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

    const handleSingle = () => {
        setRuns(runs + 1);
    }

    const handleFour = () => {
        setRuns(runs + 4);
        setFours(fours + 1);
    }

    const handleSix = () => {
        setSixes(sixes + 1);
        setRuns(runs + 6);
    }

    return (
        <div className="card score-card">
            <h3 className="users-title">Player: Bangla Batsman</h3>
            <p><small>Fours: {fours} | Sixes: {sixes}</small></p>
            {
                runs >= 50 && <p className="milestone">Half-century unlocked!</p>
            }
            <h2 className="score-value">Score: {runs}</h2>
            <div className="actions-grid compact">
                <button onClick={handleSingle}>Single</button>
                <button onClick={handleFour}>Four</button>
                <button onClick={handleSix}>Six</button>
            </div>
        </div>
    )
}