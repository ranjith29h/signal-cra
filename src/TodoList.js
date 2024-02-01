import { todos, addTodo, removeTodo, completedCount } from './global.store';
import { useState } from 'react';

const TodoItem = ({ todo }) => {
	return (
		<li>
			<input
				type='checkbox'
				checked={todo.completed}
				onChange={() => {
					todo.completed = !todo.completed;
					todos.value = [...todos.value];
				}}
			/>
			{todo.completed ? <s>{todo.text}</s> : todo.text}{' '}
			<button style={{ marginLeft: '10px', color: 'red' }} onClick={() => removeTodo(todo.text)}>
				x
			</button>
		</li>
	);
};

export default function TodoList() {
	const [text, setText] = useState('');

	const onInput = (event) => {
		setText(event.target.value);
	};

	const onAddClick = () => {
		addTodo(text);
		setText('');
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Todo List</h1>
			<p>Add a new todo:</p>
			<input type='text' value={text} onInput={onInput} />
			<button style={{ marginLeft: '10px' }} onClick={onAddClick}>
				Add+
			</button>

			<ul style={{ textAlign: 'center', alignContent: 'center', marginTop: '20px' }}>
				{todos.value.map((todo, index) => (
					<TodoItem key={index} todo={todo} idx={index} />
				))}
			</ul>
			<p>Completed count: {completedCount.value}</p>
		</div>
	);
}
