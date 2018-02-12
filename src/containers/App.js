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

	setDifficulty(difficultyLevel) {
		const board = sudoku.generate(difficultyLevel);
		this.setState({
			initialBoard: board,
			board
		});
		console.log(difficultyLevel);
	}

	handleChange(event, position) {
		const boardArray = this.state.board.split("");
		const board = [
			...boardArray.slice(0, position),
			event.target.value,
			...boardArray.slice(position + 1)
		].join("");
		this.setState({ board });
		console.log("input");
		console.log(this.state.board);
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
					setDifficultyEasy={() => this.setDifficulty("easy")}
					setDifficultyMedium={() => this.setDifficulty("medium")}
					setDifficultyHard={() => this.setDifficulty("hard")}
				/>
				<Board
					onSubmit={this.handleSubmit.bind(this)}
					startingBoard={this.state.board}
					onChange={this.handleChange.bind(this)}
				/>
				<GameButtons />
			</div>
		);
	}
}

export default App;
