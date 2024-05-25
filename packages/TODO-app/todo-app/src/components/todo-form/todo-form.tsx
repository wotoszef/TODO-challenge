import React, { useState, useEffect, FormEvent } from "react";
import { Todo } from "../../types/todo-types";
import { FormButton, FormInput, FormWrapper } from "./todo-form.style";

interface TodoFormProps {
  addOrUpdateTodo: (todo: Omit<Todo, "id" | "completed">) => void;
  editingTodo: Todo | null;
}

const TodoForm: React.FC<TodoFormProps> = ({
  addOrUpdateTodo,
  editingTodo,
}) => {
  const [title, setTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDueDate(editingTodo.dueDate);
    } else {
      setTitle("");
      setDueDate("");
    }
  }, [editingTodo]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addOrUpdateTodo({ title, dueDate });
    setTitle("");
    setDueDate("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormInput
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <FormButton type="submit">{editingTodo ? "UPDATE" : "ADD"}</FormButton>
    </FormWrapper>
  );
};

export default TodoForm;
