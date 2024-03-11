import React,{useState, useEffect} from 'react'

function App() {
const[count, setCount] = useState(0)

useEffect(() => 
 console.log(count),[count]
)

  return (
    <div>
      <h1>You Clicked {count} times</h1>
      <button onClick = {() => setCount(count + 1)}>click me</button>
      

    </div>
  )
}

export default App