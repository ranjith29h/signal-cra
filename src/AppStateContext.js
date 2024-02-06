import React, { useContext } from "react";
import { todos } from './global.store';
const AppState = React.createContext();

function AppStateProvider(props) {
	function addTodo(newItem) {
		todos.value = [...todos.value, { text: newItem.value, completed: false }];
	}

	function removeTodo(index) {
		todos.value.splice(index, 1);
		todos.value = [...todos.value];
	}

	return <AppState.Provider value={{ addTodo, removeTodo }}>{props.children}</AppState.Provider>;
}

function useAppState() {
  const appState = useContext(AppState);
  if (!appState) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }
  return appState;
}

export { AppStateProvider, useAppState };
