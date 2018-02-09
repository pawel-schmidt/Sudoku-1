import React from "react";

import style from "./DifficultyButtons.css";

const DifficultyButtons = props => (
	<div className={style.DifficultyButtons}>
		<button onClick={props.setDifficultyEasy}>EASY</button>
		<button onClick={props.setDifficultyMedium}>MEDIUM</button>
		<button onClick={props.setDifficultyHard}>HARD</button>
	</div>
);

export default DifficultyButtons;
