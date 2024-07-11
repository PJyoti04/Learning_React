import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todoArr, setTodoArr] = useState([])
  function pushData(){
    setTodoArr([...todoArr, todo])
    console.log(todoArr);
  }

  return (
  <>
  <input type="text" placeholder='Add to do ...' onChange={(e) => {
    setTodo(e.target.value)}} />
  <button onClick={pushData}>Click Here</button>
  {
    todoArr.map((e) =>{
      return(
        <h1>{e}</h1>
      )
    })
  }
  </>
  )
}

export default App
