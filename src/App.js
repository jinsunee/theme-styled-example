import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoItem from "./components/pages/TodoItem";
import TodoList from "./components/pages/TodoList";
import { Providers } from "./components/providers";

function App() {
  return (
    <Providers>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/:id" element={<TodoItem />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
