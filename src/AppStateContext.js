import React, { useContext } from "react";
import { signal } from "@preact/signals-react";
const AppState = React.createContext();

function AppStateProvider(props) {
  const todos = signal([
    { text: "Write my first post on DEV community", completed: true },
    { text: "Explore more into Preact Signals feature", completed: false },
  ]);
  function addTodo(newItem) {
    todos.value = [...todos.value, { text: newItem.value, completed: false }];
  }

  function removeTodo(index) {
    todos.value.splice(index, 1);
    todos.value = [...todos.value];
  }

  return (
    <AppState.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </AppState.Provider>
  );
}

function useAppState() {
  const appState = useContext(AppState);
  if (!appState) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }
  return appState;
}

export { AppStateProvider, useAppState };
