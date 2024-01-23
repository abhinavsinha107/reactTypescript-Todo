import React from "react";
import Todo from "../../model";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import styles from "./SingleTodo.module.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = (props: Props) => {
  const { todo, todos, setTodos } = props;

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <li className={styles.singleTodo}>
      <span className={todo.isCompleted ? styles.done : ""}>
        {todo.todo}
      </span>
      <div>
        <FaEdit className={styles.icons} />
        <MdDelete
          className={styles.icons}
          onClick={() => handleDelete(todo.id)}
        />
        <MdDone className={styles.icons} onClick={() => handleDone(todo.id)} />
      </div>
    </li>
  );
};

export default SingleTodo;
