import React from "react";

const IconButton = (props) => {
	const { hide, style, onClick, icon } = props;
	return (
		<div>
			{hide !== null && (
				<button className={`btn btn-${style}`} onClick={onClick}>
					<i className={`fa fa-${icon}`}></i>
				</button>
			)}
		</div>
	);
};

export default IconButton;
