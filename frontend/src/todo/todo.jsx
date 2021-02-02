import React, { useState, useEffect } from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const todos = {
	description: "",
	list: [],
};

const URL = "http://localhost:3003/api/todos";

const Todo = () => {
	const [todo, setTodo] = useState(todos);

	useEffect(() => {
		console.log("useEffect");
		refreshTodo();
	}, []);

	const refreshTodo = () => {
		axios.get(`${URL}?sort=-createdAt`).then((response) => {
			setTodo({
				description: "",
				list: response.data,
			});
		});
	};

	const handleChange = (e) => {
		setTodo({
			description: e.target.value,
			list: [...todo.list],
		});
	};

	const handleMarkAsDone = (todo) => {
		console.log("done", todo);
		axios
			.put(`${URL}/${todo._id}`, { ...todo, done: true })
			.then((_) => refreshTodo());
	};

	const handleMarkAsPending = (todo) => {
		console.log("done", todo);
		axios
			.put(`${URL}/${todo._id}`, { ...todo, done: false })
			.then((_) => refreshTodo());
	};

	const handleAdd = () => {
		const description = todo.description;
		axios.post(URL, { description }).then((_) => refreshTodo());
	};

	const handleRemove = (todo) => {
		axios.delete(`${URL}/${todo._id}`).then((_) => refreshTodo());
	};

	return (
		<div>
			<PageHeader name="Tarefas" small="Cadastro" />
			<TodoForm
				description={todo.description}
				handleAdd={() => handleAdd()}
				handleChange={handleChange}
			/>
			<TodoList
				todoList={todo.list}
				handleRemove={handleRemove}
				handleMarkAsDone={handleMarkAsDone}
				handleMarkAsPending={handleMarkAsPending}
			/>
		</div>
	);
};

export default Todo;
