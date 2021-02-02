import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

const TodoForm = (props) => {
	const {
		handleAdd,
		handleChange,
		handleSearch,
		handleClear,
		description,
	} = props;

	const keyHandler = (e) => {
		if (e.key === "Enter") {
			//shit+enter ou enter
			e.shiftKey ? handleSearch() : handleAdd();
			//esc
		} else if (e.key === "Escape") {
			handleClear();
		}
	};
	return (
		<div role="form" style={{ paddingBottom: "60px" }}>
			<Grid cols="12 9 10">
				<input
					id="description"
					className="form-control"
					placeholder="Adcione uma tarefa"
					onChange={(e) => handleChange(e)}
					value={description}
					onKeyUp={keyHandler}
				/>
			</Grid>
			<Grid cols="12 3 2">
				<IconButton style="primary" icon="plus" onClick={handleAdd} />
				<IconButton style="info" icon="search" onClick={handleSearch} />
				<IconButton style="default" icon="close" onClick={handleClear} />
			</Grid>
		</div>
	);
};

export default TodoForm;
