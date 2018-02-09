import React from "react";
import Tile from "../Tile/Tile.js";

import sudoku from "sudoku-umd";

const Board = props => {
	let tiles = props.value;
	let splitedTiles = tiles.split("");
	return (
		<form onSubmit={props.onSubmit}>
			{splitedTiles.map((item, index) => (
				<Tile key={index} value={item} onChange={props.onChange} />
			))}
		</form>
	);
};

export default Board;
