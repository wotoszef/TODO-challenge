import TodoForm from "../todo-form/todo-form";
import SearchBar from "../searchbar/searchbar";
import TodoList from "../todo-list/todo-list";
import React, { useEffect, useState } from "react";
import { Todo } from "../../types/todo-types";
import {
  addTodo,
  deleteTodo,
  getTodos,
  toggleComplete,
  updateTodo,
} from "../../utils/api/api";
import {HomeContainer, Title} from "./home.style";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  const addOrUpdateTodo = async (todo: Omit<Todo, "id" | "completed">) => {
    if (editingTodo) {
      const updatedTodo = await updateTodo(editingTodo.id, todo);
      setTodos(todos.map((t) => (t.id === editingTodo.id ? updatedTodo : t)));
      setEditingTodo(null);
    } else {
      const newTodo = await addTodo(todo);
      setTodos([...todos, newTodo]);
    }
  };

  const handleEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = async (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      const updatedTodo = await toggleComplete(id, todo);
      setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    }
  };

  const sortedTodos = [...todos].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
  );
  const filteredTodos = sortedTodos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <HomeContainer>
      <Title>TODO List</Title>
      <TodoForm addOrUpdateTodo={addOrUpdateTodo} editingTodo={editingTodo} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={handleToggleComplete}
        editTodo={handleEditTodo}
        deleteTodo={handleDeleteTodo}
      />
    </HomeContainer>
  );
};

export default Home;
