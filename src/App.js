import "./App.css";
import { AppStateProvider } from "./AppStateContext";
import TodoList from "./TodoList";

function App() {
  return (
    <AppStateProvider>
      <TodoList />
    </AppStateProvider>
  );
}

export default App;
