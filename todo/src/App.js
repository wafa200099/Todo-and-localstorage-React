import React,{useState,useEffect} from 'react'
import './App.css';
import { FaTrashAlt,FaPlusCircle,FaCheck } from "react-icons/fa";

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
  const [done,setDone]=useState(false)

  const addToDo =(todo)=>{

    const newToDo={
      id:Math.random(), // to identify the todo
      todo:todo,
      isDone:false
     }
       setList([...list,newToDo])
// add todo to list
// add a new todo to the exisiting element in list
  
//clear input 
  setInput(" ")
  }

  const doneToDo = (id) => {
    console.log(id);
   const newList =list.filter((todo)=>todo.id === id)
    if(newList){
     setDone(!done)
   }
  }
  // const doneToDo = id => {
  //   const [done,setDone]=useState(false)
  //   const newTodos = [...list];
  //   console.log(list);
  //   newTodos[id].isDone = true;
  //   setList(newTodos);
  // };



  const deleteToDo=(id)=>{
   const newList=list.filter((todo)=>todo.id !== id)
   setList(newList)
  }
  useEffect(() => {
    // storing input name
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);





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
       {/* {todo.todo}  */}
        <span style={{ textDecoration: done ? "line-through" : "" }}>{todo.todo}</span>
        <button onClick={()=>deleteToDo(todo.id)} style={{marginLeft:'100px',padding:'7px'}}><FaTrashAlt/></button>
        <button onClick={()=>doneToDo(todo.id)} style={{marginLeft:'10px',padding:'7px'}}><FaCheck/></button>
        </li>
      ))}
       </ul>
    </div>
  )
}

export default App

// import React from "react";
// import "./App.css";
// import { Button, Card, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Todo({ todo, index, markTodo, removeTodo }) {
//   return (
//     <div
//       className="todo"
      
//     >
//       <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
//       <div>
//         <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
//         <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
//       </div>
//     </div>
//   );
// }

// function FormTodo({ addTodo }) {
//   const [value, setValue] = React.useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };

//   return (
//     <Form onSubmit={handleSubmit}> 
//     <Form.Group>
//       <Form.Label><b>Add Todo</b></Form.Label>
//       <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
//     </Form.Group>
//     <Button variant="primary mb-3" type="submit">
//       Submit
//     </Button>
//   </Form>
//   );
// }

// function App() {
//   const [todos, setTodos] = React.useState([
//     {
//       text: "This is a sampe todo",
//       isDone: false
//     }
//   ]);

//   const addTodo = text => {
//     const newTodos = [...todos, { text }];
//     setTodos(newTodos);
//   };

//   const markTodo = index => {
//     const newTodos = [...todos];
//     newTodos[index].isDone = true;
//     setTodos(newTodos);
//   };

//   const removeTodo = index => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="app">
//       <div className="container">
//         <h1 className="text-center mb-4">Todo List</h1>
//         <FormTodo addTodo={addTodo} />
//         <div>
//           {todos.map((todo, index) => (
//             <Card>
//               <Card.Body>
//                 <Todo
//                 key={index}
//                 index={index}
//                 todo={todo}
//                 markTodo={markTodo}
//                 removeTodo={removeTodo}
//                 />
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;