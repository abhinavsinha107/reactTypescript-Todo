import React, { useRef } from "react";
import styles from "./Input.module.css";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
};

const Input = (props: Props) => {
  const { todo, setTodo, handleAddTodo } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className={styles.input} onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
    }
    }>
      <input
        className={styles.inputBox}
        type="input"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your task..."
      />
      <button className={styles.inputSubmit} type="submit">
        GO
      </button>
    </form>
  );
};

export default Input;
