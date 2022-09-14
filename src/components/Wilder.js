import React from "react";
import blank_profile from "../assets/profil.png";
import Skills from "./Skill";
import styles from "../Card.module.css";

const Wilder = ({ name, skills, isDeletable }) => {
	return (
		<>
			<article className={styles.card}>
				<img src={blank_profile} alt="Jane Doe Profile" />
				<h3>{name}</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</p>
				<h4>Wild Skills</h4>
				<ul className={styles.skills}>
					{skills.map((skill, index) => (
						<Skills key={index} title={skill.title} votes={skill.votes} />
					))}
				</ul>
			</article>
			{isDeletable ? <button>Delete</button> : null}
		</>
	);
};
export default Wilder;
