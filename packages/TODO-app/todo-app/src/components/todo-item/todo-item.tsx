import React from "react";
import { Todo } from "../../types/todo-types";
import { ItemText, ItemWrapper, UtilButton } from "./todo-item.style";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  editTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  editTodo,
  deleteTodo,
  index,
}) => {
  return (
    <ItemWrapper>
      <ItemText
        completed={todo.completed}
        onClick={() => toggleComplete(todo.id)}
      >
        <div>
          {index + 1}. {todo.title}
        </div>
        <div>(Due: {todo.dueDate})</div>
      </ItemText>
      <UtilButton onClick={() => editTodo(todo)}>Edit</UtilButton>
      <UtilButton onClick={() => deleteTodo(todo.id)}>Delete</UtilButton>
    </ItemWrapper>
  );
};

export default TodoItem;
