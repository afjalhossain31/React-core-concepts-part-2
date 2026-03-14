import { useEffect, useState } from "react"

export default function Players() {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);


    return (
        <div className="card users-card">
            <h3 className="users-title">Players: {players.length}</h3>
            <ol className="users-list">
                {
                    players.map(player => <li key={player.id} className="user-item"><span className="user-name">{player.name}</span></li>)
                }
            </ol>
        </div>
    )
}