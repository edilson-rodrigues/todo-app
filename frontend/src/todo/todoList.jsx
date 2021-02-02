import React from "react";
import IconButton from "../template/iconButton";

const TodoList = (props) => {
	const {
		todoList,
		handleRemove,
		handleMarkAsDone,
		handleMarkAsPending,
	} = props;

	const markeAsDone = {
		textDecoration: "line-through",
		color: "#777",
	};

	const renderRows = () => {
		const list = todoList || [];
		return list.map((todo) => (
			<tr key={todo._id}>
				<td style={todo.done ? markeAsDone : {}}>{todo.description}</td>
				<td>
					{/* mark todo checked */}
					<IconButton
						style={"success"}
						icon="check"
						onClick={() => handleMarkAsDone(todo)}
						hide={todo.done}
					/>
					{/* pending todo */}
					<IconButton
						style={"warning"}
						icon="undo"
						onClick={() => handleMarkAsPending(todo)}
						hide={!todo.done}
					/>
					{/* remove todo */}
					<IconButton
						style={"danger"}
						icon="trash-o"
						onClick={() => handleRemove(todo)}
						hide={!todo.done}
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
