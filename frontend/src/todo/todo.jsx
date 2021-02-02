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

	const refreshTodo = (description = "") => {
		//console.log("refreshTodo", description);
		const search = description ? `&description__regex=/${description}/` : "";
		axios.get(`${URL}?sort=-createdAt${search}`).then((response) => {
			setTodo({
				description,
				list: response.data,
			});
		});
	};

	const handleSearch = () => {
		refreshTodo(todo.description);
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
			.then((_) => refreshTodo(todo.description));
	};

	const handleMarkAsPending = (todo) => {
		console.log("done", todo);
		axios
			.put(`${URL}/${todo._id}`, { ...todo, done: false })
			.then((_) => refreshTodo(todo.description));
	};

	const handleAdd = () => {
		const description = todo.description;
		axios.post(URL, { description }).then((_) => refreshTodo());
	};

	const handleRemove = (todo) => {
		axios
			.delete(`${URL}/${todo._id}`)
			.then((_) => refreshTodo(todo.description));
	};

	const handleClear = () => {
		refreshTodo();
	};

	return (
		<div>
			<PageHeader name="Tarefas" small="Cadastro" />
			<TodoForm
				description={todo.description}
				handleAdd={() => handleAdd()}
				handleChange={handleChange}
				handleSearch={() => handleSearch()}
				handleClear={() => handleClear()}
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
