import { use } from "react";

export default function Friends({friendsPromise}){

    const friends = use(friendsPromise) || [];

    return (
        <div className="card">
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <FriendItem key={friend.id} friend={friend} />)
            }
        </div>
    )
}

function FriendItem({ friend }) {
    return (
        <div className="friend">
            <h4>{friend.name}</h4>
            <p>Email: {friend.email}</p>
        </div>
    );
}