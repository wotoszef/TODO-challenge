import React from "react";
import { Todo } from "../../types/todo-types";
import TodoItem from "../todo-item/todo-item";
import { ListWrapper } from "./todo-list.style";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  editTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  editTodo,
  deleteTodo,
}) => {
  return (
    <ListWrapper>
      {todos.map((todo, index: number) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          index={index}
        />
      ))}
    </ListWrapper>
  );
};

export default TodoList;
