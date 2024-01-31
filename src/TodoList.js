import { signal, computed, batch, useSignal } from "@preact/signals-react";
import { useAppState } from "./AppStateContext";

const newItem = signal("");
export default function TodoList() {
  const { todos, addTodo, removeTodo } = useAppState();
  const completedCount = computed(() => {
    return todos.value.filter((todo) => todo.completed).length;
  });

  useSignal();

  const onInput = (event) => (newItem.value = event.target.value);

  const onAddClick = () => {
    batch(() => {
      addTodo(newItem);
      newItem.value = "";
    });
  };

  return (
    <>
      <input type="text" value={newItem.value} onInput={onInput} />
      <button style={{ marginLeft: "10px" }} onClick={onAddClick}>
        Add
      </button>

      <ul style={{ textAlign: "left" }}>
        {todos.value.map((todo, index) => {
          return (
            <li>
              <input
                type="checkbox"
                checked={todo.completed}
                onInput={() => {
                  todo.completed = !todo.completed;
                  todos.value = [...todos.value];
                }}
              />
              {todo.completed ? <s>{todo.text}</s> : todo.text}{" "}
              <button
                style={{ marginLeft: "10px", color: "red" }}
                onClick={() => removeTodo(index)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <p>Completed count: {completedCount.value}</p>
    </>
  );
}
