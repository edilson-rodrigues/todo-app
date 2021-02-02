import React, { useState } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const todos = {
	description: "",
	list: [],
};

const Todo = () => {
	const [todo, setTodo] = useState(todos);

	const handleChange = (e) => {
		setTodo({
			description: e.target.value,
		});
	};

	const handleAdd = () => {
		console.log("add", todo.description);
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
