import { TodoItemsProvider } from "./TodoItemsProvider";

export function Providers({ children }) {
  return <TodoItemsProvider>{children}</TodoItemsProvider>;
}
