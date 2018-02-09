import React from "react";
import style from './Tile.css';

const Tile = props => <input className={style.Tile} type="number" min="1" max="9" value={props.value} onChange={props.onChange} step="1"/>;

export default Tile;
