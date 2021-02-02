import React from "react";
import styled from "styled-components";

const ButtonTodo = styled.button`
	margin-right: 5px;
	width: 37px;

	@media screen and (max-width: 765px) {
		margin-top: 5px;
	}
`;

const IconButton = (props) => {
	const { hide, style, onClick, icon } = props;
	return (
		<React.Fragment>
			{!hide && (
				<ButtonTodo className={`btn btn-${style}`} onClick={onClick}>
					<i className={`fa fa-${icon}`}></i>
				</ButtonTodo>
			)}
		</React.Fragment>
	);
};

export default IconButton;
