import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

const TodoForm = (props) => {
	const { handleAdd, handleChange, handleSearch, description } = props;
	return (
		<div role="form" className="todoForm">
			<Grid cols="12 9 10">
				<input
					id="description"
					className="form-control"
					placeholder="Adcione uma tarefa"
					onChange={(e) => handleChange(e)}
					value={description}
				/>
			</Grid>
			<Grid cols="12 3 2">
				<IconButton style="primary" icon="plus" onClick={handleAdd} />
				<IconButton style="info" icon="search" onClick={handleSearch} />
			</Grid>
		</div>
	);
};

export default TodoForm;
