import React, { useState } from "react";
import "./TodoList.css";

const addTask = [];
const TodoList = () => {
  const [addTask, setAddTask] = useState([]);

  const addTaskHandler = (e) => {
  setAddTask (e.target.value);
    console.log(addTask);  
  };

  return (
    <div className="top-container">
      <div>
        <h2> To-Do-List</h2>
      </div>
      <div>
        {" "}
        <label htmlFor="text" placeholder="add you task">
          {" "}
        </label>
        <input type="text" id="text"></input>
      </div>
      <div>
        <button onClick={addTaskHandler}> Add Task</button>
      </div>
    </div>
  );
};

export default TodoList;

//  ,const readValue =  textBoxRef.current.value; ref={textBoxRef};const textBoxRef = useRef();
