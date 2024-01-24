import React, { useState } from "react";
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

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editedTodo } : todo
      )
    );
    setEditMode(false);
  };

  return editMode ? (
    <form
      className={styles.singleTodo}
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      <input
        type="text"
        value={editedTodo}
        onChange={(e) => setEditedTodo(e.target.value)}
      />
      <div>
        <FaEdit className={styles.icons} onClick={() => setEditMode(false)} />
      </div>
    </form>
  ) : (
    <li className={styles.singleTodo}>
      <span className={todo.isCompleted ? styles.done : ""}>{todo.todo}</span>
      <div>
        <FaEdit className={styles.icons} onClick={() => setEditMode(true)} />
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
