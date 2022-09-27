import React, { useState, useRef } from "react";
import "./TodoList.css";

//const addTask = [];
const TodoList = () => {
  const [addTask, setAddTask] = useState([]);
  const textBoxRef = useRef();

  const addTaskHandler = (e) => {
    const readValue = textBoxRef.current.value;

    console.log(readValue);
    
    setAddTask([...addTask, readValue])
   //addTask.push(readValue);
   console.log(addTask);
  };

  return (
    <div className="top-container">
      <div>
        <h2> To-Do-List</h2>
      </div>
      <div>
        <label htmlFor="text" placeholder="add you task"></label>
        <input type="text" id="text" ref={textBoxRef}></input>
      </div>
      <div>
        <button onClick={addTaskHandler}> Add Task</button>
      </div>
      <div>
        <ul>
          {addTask?.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
