import React from "react";
import IconButton from "../template/iconButton";

const TodoList = (props) => {
	const { todoList, handleRemove } = props;

	const renderRows = () => {
		const list = todoList || [];
		return list.map((todo) => (
			<tr key={todo._id}>
				<td>{todo.description}</td>
				<td>
					<IconButton
						style={"danger"}
						icon="trash"
						onClick={() => handleRemove(todo)}
					/>
				</td>
			</tr>
		));
	};

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Descrição</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>{renderRows()}</tbody>
		</table>
	);
};

export default TodoList;
