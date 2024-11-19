import { Information } from './Components';
import { Fields } from './Components';
import styles from './App.module.css';
import { useState } from 'react';

const GameLayout = ({fields}) => (
	<div className={styles.App}>
		<h2>Крестики-нолики</h2>
		<Information />
		<Fields fields = {fields}/>
		<button className={styles.startbtn}>Начать заново</button>
	</div>
);
function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const fields = new Array(9).fill('');

	return <GameLayout fields = {fields}/>;
}

export default Game;
