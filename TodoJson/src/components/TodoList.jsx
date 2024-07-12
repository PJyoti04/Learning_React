import React,{useEffect,useState} from 'react'

const TodoList = () => {
    const[todoArr,setTodoArr]=useState([])

    async function getItem() {
        let res = await fetch("http://localhost:3000/todo")
        let data = await res.json()
        console.log(data);
        setTodoArr(data)
    }

    async function del(id) {
        let r = await fetch(`http://localhost:3000/todo/${id}`,{
            method:"DELETE"
            
        })
        // getItem()
    }

    useEffect(() =>{
        getItem()
    },[])
  return (
    <div>
        {
            todoArr.map((e) => (
                <div>
                    <h1>{e.todo}</h1>
                    <h3>{e.isCompleted ? "Completed" : "Not Completed"}</h3>
                    <button onClick={() => 
                        del(e.id)
                    }>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList