
import './App.css'

function App() {

  function handleClick() {
    alert('I am  clicked')
  }
function handleClick3() {
  alert('I am  clicked')
}

const handleAdd5 = (num) =>{
  const result = num + 5
  alert(result);
}

  return (
    <>
     <h3>Vite + React</h3>
    <button onClick={handleClick}>Click me1</button>
    <button onClick={function handleClick2() { 
      alert('clicked'); }}>Click me!2</button>
    <button onClick={handleClick3}>Click me!3</button>
    <button onClick={ ()=> alert('clicked 4 ') }>Click me4!</button>
    <button onClick={ ()=> handleAdd5(10) }>Click me5!</button>

    </>
  )

}

export default App
