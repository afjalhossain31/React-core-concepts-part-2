import { use } from "react"

export default function Users({ fetchUsers }) {

    if (!fetchUsers) {
        return (
            <div className="card users-card">
                <h3 className="users-title">Users</h3>
                <p className="users-empty">No user data source connected yet.</p>
            </div>
        );
    }

    const users = use(fetchUsers) || [];

    return (
        <div className="card users-card">
            <h3 className="users-title">Users: {users.length}</h3>
            <ul className="users-list">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <span className="user-name">{user.name}</span>
                        <span className="user-email">{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}