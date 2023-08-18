import './style.css';
import { useState } from 'react';
import React from 'react';

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] =  useState([])

    const handleChange = (event)=>{
        setTodo(event.target.value);
        // console.log(todo);
    };
    const handleSubmit = (event)=> {
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
        setTodo("");

    };
    return(
         <div>
             <header className="header">
                <nav>
                    <h4>Todo App</h4>
                </nav>
             </header>
             <div>
                <form onSubmit={handleSubmit}>
                    <input value={todo} onChange={handleChange} type="text" placeholder="add todo list"></input><br/><br/>
                    <button type="submit">Add</button>
                </form>
             </div>
             <div className="content-container">
                <div className="content">
                    <section className="content-item">
                        <h3 className="list">List:</h3>
                        {todoList.map((item, index)=>(
                           <h4 key={index}>{item}</h4>
                        ))}
                        
                    </section>
                </div>
             </div>
         </div>

    )
}