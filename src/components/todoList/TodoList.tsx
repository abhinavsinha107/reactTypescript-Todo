import Todo from "../../model";
import SingleTodo from "../singleTodo/SingleTodo";
import styles from "./TodoList.module.css"

type Props = {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = (props: Props) => {
  const { todos, setTodos } = props;
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => {
        return <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
