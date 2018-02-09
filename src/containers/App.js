import React from "react";

import sudoku from "sudoku-umd";

import style from "./App.css";

import Board from "../components/Board/Board.js";

import GameButtons from "../components/GameButtons/GameButtons.js";

import DifficultyButtons from "../components/DifficultyButtons/DifficultyButtons.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialBoard: "",
			board: ""
		};
	}

	setDifficultyEasy() {
		this.setState({ initialBoard: sudoku.generate("easy") });
		console.log("easy");
	}

	setDifficultyMedium() {
		this.setState({ initialBoard: sudoku.generate("medium") });
		console.log("medium");
	}

	setDifficultyHard() {
		this.setState({ initialBoard: sudoku.generate("hard") });
		console.log("hard");
	}

	handleChange(e) {
		this.setState({ board: e.target.value });
		console.log("ok");
	}

	handleSubmit(e) {
		alert("A name was submitted: " + this.state.board);
		e.preventDefault();
	}

	render() {
		return (
			<div className={style.App}>
				<h1>Sudoku</h1>
				<DifficultyButtons
					setDifficultyEasy={this.setDifficultyEasy.bind(this)}
					setDifficultyMedium={this.setDifficultyMedium.bind(this)}
					setDifficultyHard={this.setDifficultyHard.bind(this)}
				/>
				<Board
					onSubmit={this.handleSubmit.bind(this)}
					value={this.state.initialBoard}
					onChange={this.handleChange.bind(this)}
				/>
				<GameButtons />
			</div>
		);
	}
}

export default App;
