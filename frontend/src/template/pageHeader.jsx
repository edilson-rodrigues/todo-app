import React from "react";

const PageHeader = (props) => {
	const { name, small } = props;
	return (
		<header>
			<h2>
				{name}
				{` `}
				<small>{small}</small>
			</h2>
		</header>
	);
};

export default PageHeader;
