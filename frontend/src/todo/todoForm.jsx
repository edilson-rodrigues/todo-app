import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

const TodoForm = (props) => {
	return (
		<div role="form" className="todoForm">
			<Grid cols="12 9 10">
				<input
					id="description"
					className="form-control"
					placeholder="Adcione uma tarefa"
				/>
			</Grid>
			<Grid cols="12 3 2">
				<IconButton style="primary" icon="plus" />
			</Grid>
		</div>
	);
};

export default TodoForm;
