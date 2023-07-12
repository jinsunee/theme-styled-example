import { useContext } from "react";
import { TodoItemsContext } from "../providers/TodoItemsProvider";

export default function useTodoItems() {
  const context = useContext(TodoItemsContext);

  if (!context) {
    throw new Error("useTodoItem must be used within a TodoItemsProvider");
  }

  return context;
}
