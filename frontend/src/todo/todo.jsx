import React, { Component } from "react";
import { render } from "react-dom";
import PageHeader from "../template/pageHeader";

export default class Todo extends Component {
	render() {
		return (
			<div>
				<PageHeader name={"Tarefas"} small={"Cadastro"} />
			</div>
		);
	}
}
