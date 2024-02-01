import { signal, computed } from '@preact/signals-react';
export const todos = signal([
	{ text: 'Write my first post on DEV community', completed: true },
	{ text: 'Explore more into Preact Signals feature', completed: false },
]);

export function addTodo(text) {
	todos.value = [...todos.value, { text, completed: false }];
}

export function removeTodo(text) {
	const newTodos = todos.value.filter((todo) => todo.text !== text);
	todos.value = [...newTodos];
}

// should sit outside of the component and Ideally in a store itself.
export const completedCount = computed(() => {
	return todos.value.filter((todo) => todo.completed).length;
});
