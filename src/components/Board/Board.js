import React from "react";
import Tile from "../Tile/Tile.js";

import sudoku from "sudoku-umd";

const Board = props => {
	let tiles = props.startingBoard;
	let splitedTiles = tiles.split("");
	
	return (
		<form onSubmit={props.onSubmit}>
			{splitedTiles.map((item, index) => (
				<Tile key={index} onChange={event => props.onChange(event, index)} value={item} />
			))}
		</form>
	);
};

export default Board;
