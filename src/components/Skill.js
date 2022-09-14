import React from "react";
import styles from "../Card.module.css";

const skills = (props) => {
	return (
		<>
			<li>
				{props.title}
				<span className={styles.votes}>{props.votes}</span>
			</li>
		</>
	);
};

export default skills