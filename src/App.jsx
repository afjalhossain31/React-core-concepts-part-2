import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';

import './App.css'
import { Suspense } from 'react';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fetchPosts = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

function App() {
  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPosts();

  function handleClick() {
    alert('I am clicked.')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <main className="app-shell">
      <h1 className="app-title">React Core Concepts</h1>
      <p className="app-subtitle">Practice events, state, and data rendering</p>

      <Players></Players>
      {/* <Suspense fallback={<h4>Posts are coming.......</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Batsman></Batsman>
      <Counter></Counter>

      <section className="card actions-card">
        <h3 className="users-title">Action Buttons</h3>
        <div className="actions-grid">
          <button onClick={handleClick}>Click Me</button>
          <button onClick={function handleClick2() {
            alert('clicked 2')
          }}>Click Me 2</button>
          <button onClick={handleClick3}>Click Me 3</button>
          <button onClick={() => alert('click 4')}>Click Me 4</button>
          <button onClick={() => handleAdd5(10)}>Click Add 5</button>
        </div>
      </section>
    </main>
  )
}

export default App
