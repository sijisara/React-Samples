import { useState } from "react";
function AddTodo({ addTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return; 
    addTask(text);
    setText(""); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add</button>
    </form>
  );
}


function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}


function TodoCount({ count }) {
  return <p>Total tasks: {count}</p>;
}


export default function Todo() {
  const [tasks, setTasks] = useState([]);    

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTask={addTask} />
      <TodoList tasks={tasks} />
      <TodoCount count={tasks.length} />
    </div>
  );
}