import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Login</h1>
      <br/>
      <label for="email">Email ID : </label>
      <input type="email" id="email" name="email" />
      <br/><br/>
      <label for="password">Password : </label>
      <input type="password" id="password" name="password" />
      <br/><br/>
      <button>Login</button>
    </>
  )
}

export default App
