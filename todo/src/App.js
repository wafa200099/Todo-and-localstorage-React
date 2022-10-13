import React,{useState,useEffect} from 'react'
import './App.css';
import { FaTrashAlt,FaPlusCircle } from "react-icons/fa";
const getLocalStorage=()=>{
  let myLocalTasks = localStorage.getItem('todos')
  console.log( myLocalTasks);
  if(myLocalTasks){
   return JSON.parse(localStorage.getItem('todos'))
  }else{
    return []
  }
}
function App() {
  const [list,setList]=useState(getLocalStorage())
  const [input,setInput]=useState("")


  const addToDo =(todo)=>{

      const newToDo={
        id:Math.random(), // to identify the todo
        todo:todo,
       }
       setList([...list,newToDo])
// add todo to list
// add a new todo to the exisiting element in list
  
//clear input 
  setInput(" ")
  }
  const deleteToDo=(id)=>{
   const newList=list.filter((todo)=>todo.id !== id)
   setList(newList)
  }
  useEffect(() => {
    // storing input name
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  useEffect(()=>{
    let myLocalTasks = JSON.parse(window.localStorage.getItem('todos'))
    setList(myLocalTasks);
    },[]);




  return (
    <div className="box-shadow-md">
      <h1>TO DO LIST</h1>
      <input
      style={{marginRight:'10px',padding:'7px',width:"200px"}}
       type="text"
       value={input}
       onChange={(e)=>setInput(e.target.value)}/>
       <button onClick={()=>addToDo(input)} style={{padding:'7px'}}><FaPlusCircle/></button>
       <ul style={{listStyle:"none" }}>
        {list.map((todo)=>(
        <li style={{padding:'5px',marginTop:"20px"}}  key={todo.id}>
       {todo.todo} 
        <button onClick={()=>deleteToDo(todo.id)} style={{marginLeft:'100px',padding:'7px'}}><FaTrashAlt/></button>
        </li>
      ))}
       </ul>
    </div>
  )
}

export default App