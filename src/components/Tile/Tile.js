import React from "react";
import style from './Tile.css';

const Tile = props => <input className={style.Tile} type="number" min="1" max="9" onChange={props.onChange} value={props.value} step="1"/>;

export default Tile;
