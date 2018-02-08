import React from "react";
import Tile from "../Tile/Tile.js";

import sudoku from "sudoku-umd";

const Board = props => {
	let tiles = sudoku.generate("easy");
	let splitedTiles = tiles.split("");
	return (
		<form>{splitedTiles.map((item, index) => <Tile key={index} />)}</form>
	);
};

export default Board;
