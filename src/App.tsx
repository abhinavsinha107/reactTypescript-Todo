import { useState } from "react";
import styles from "./App.module.css";
import Input from "./components/input/Input";
import Todo from "./model";
import TodoList from "./components/todoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isCompleted: false,
        },
      ]);
      setTodo("");
    }
  };

  return (
    <div className={styles.app}>
      <span className={styles.heading}>Taskify</span>
      <Input todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
