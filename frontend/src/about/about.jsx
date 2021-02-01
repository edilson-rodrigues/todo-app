import React from "react";
import PageHeader from "../template/pageHeader";

const About = (props) => (
	<div>
		<PageHeader name={"Sobre"} small={"Nós"} />
		<h2>Nossa história</h2>

		<p className="text-uppercase">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit rem minima
			iure iste perspiciatis. Asperiores a, eos cum vitae dolore similique
			aspernatur? Iure magnam ipsam possimus cupiditate soluta explicabo odio!
		</p>

		<h2>Missão e Visão</h2>
		<p>lorem ipsum dolor sit amet</p>

		<h2>Imprensa</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero
			molestiae pariatur labore hic, illo ducimus unde maiores consequatur atque
			aliquid explicabo. Repellendus, cupiditate mollitia porro nobis repellat
			natus quia?
		</p>
	</div>
);

export default About;
