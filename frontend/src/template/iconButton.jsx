import React from "react";

const IconButton = (props) => {
	const { hide, style, onclick, icon } = props;
	return (
		<div>
			{hide !== null && (
				<button className={`btn btn-${style}`} onClick={onclick}>
					<i className={`fa fa-${icon}`}></i>
				</button>
			)}
		</div>
	);
};

export default IconButton;
