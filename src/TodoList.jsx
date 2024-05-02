import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos] = useState([{task:"sample-task",id:uuidv4(),isDone: false}]);
    let [newTodo,setNewtodo]= useState("");
    let addNewTask=()=>{
     setTodos((prevTodo)=>{
      return [...todos,{task: newTodo,id: uuidv4(),isDone: false}]});
     setNewtodo("");
    }
    let updateTodoValue=(event)=>{
     setNewtodo(event.target.value)
    }
    let deletetodo=(id)=>{
      setTodos((prevTodo)=> todos.filter((prevTodo)=>prevTodo.id != id));
    }
    let upperCaseAll=()=>{
     setTodos((prevTodo)=>
       prevTodo.map((todo)=>{
       return{
        ...todo,
        task: todo.task.toUpperCase()
      }
})
  );}
    let upperCaseOne=(id)=>{
      setTodos((prevTodo)=>
      prevTodo.map((todo)=>{
        if(todo.id === id) {
      return{
       ...todo,
       task: todo.task.toUpperCase()
     }}else{
      return todo;
     }
    }))
    
    }
    let markAsDone=(id)=>{
     setTodos((prevTodo)=>
    prevTodo.map((todo)=>{
      if(todo.id== id) {
return{
        ...todo,
       isDone:true
      }}else {
        return todo;
      }
    }))
    }
    let markAsAllDone=()=>{
      setTodos((prevTodo)=>
      prevTodo.map((todo)=>{
        return {
          ...todo,
         isDone:true
        }
      })
    )}

    return (
        <div>
        <input placeholder="add a task"
        value={newTodo}
         onChange={updateTodoValue}/>
        <br></br>
        <button onClick={addNewTask}>Add Task</button> 
        <br></br> <br></br> <br></br> 
        <hr/>
      <h3> Todo List </h3>
      <ul>{ todos.map((todo)=>(
        <li key={todo.id}>
          <span style={todo.isDone ? {textDecorationLine:" line-through"}:{} }>
            {todo.task} </span>
          &nbsp; &nbsp; 
          <button onClick={ ()=>deletetodo(todo.id)}> delete</button> 
          <button onClick={()=>upperCaseOne(todo.id)} > UpperCaseOne</button>
          <button onClick={()=>markAsDone(todo.id)}> Mark as done</button></li>
          
      
    ))
        }
        <button onClick={upperCaseAll}>UpperCaseTodo</button></ul> 
        <button onClick={markAsAllDone}> Marks all as done</button>     
        </div>
    )
}