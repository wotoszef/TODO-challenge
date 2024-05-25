import axios from "axios";
import { Todo } from "../../types/todo-types";

const API_URL = "http://localhost:5001/api/todos";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (
  todo: Omit<Todo, "id" | "completed">,
): Promise<Todo> => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const updateTodo = async (
  id: number,
  todo: Partial<Todo>,
): Promise<Todo> => {
  const response = await axios.put(`${API_URL}/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const toggleComplete = async (id: number, todo: Todo): Promise<Todo> => {
  const response = await axios.put(`${API_URL}/${id}`, {
    ...todo,
    completed: !todo.completed,
  });
  return response.data;
};
