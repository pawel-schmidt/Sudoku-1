import React from "react";

import style from './GameButtons.css';

const GameButtons = props => (
	<div className={style.GameButtons}>
		<button>Check</button>
		<button>New Game</button>
		<button>Solve</button>
		<button>Restart</button>
	</div>
);

export default GameButtons;
