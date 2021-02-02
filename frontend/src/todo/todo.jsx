import React, { useState } from "react";
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

	const handleChange = (e) => {
		setTodo({
			description: e.target.value,
		});
	};

	const handleAdd = () => {
		console.log("add", todo.description);
		const description = todo.description;
		axios.post(URL, { description }).then((response) => {
			console.log("funcionou", response);
		});
	};

	return (
		<div>
			<PageHeader name="Tarefas" small="Cadastro" />
			<TodoForm
				description={todo.description}
				handleAdd={() => handleAdd()}
				handleChange={handleChange}
			/>
			<TodoList />
		</div>
	);
};

export default Todo;
