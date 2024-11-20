import { Information } from './Components';
import { Fields } from './Components';
import styles from './App.module.css';
import { useState } from 'react';

const GameLayout = ({
	fields,
	currentPlayer,
	isGameEnded,
	isDraw,
	setGameEnded,
	setCurrentPlayer,
	setIsDraw,
	handleAgain,
}) => (
	<div className={styles.App}>
		<h2>Крестики-нолики</h2>
		<Information
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
		<Fields
			fields={fields}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			setGameEnded={setGameEnded}
			setCurrentPlayer={setCurrentPlayer}
			setIsDraw={setIsDraw}
		/>
		<button onClick={handleAgain} className={styles.startbtn}>
			Начать заново
		</button>
	</div>
);
function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [fields, setFields] = useState(new Array(9).fill(' '));
	const handleAgain = () => {
		setIsDraw(false);
		setGameEnded(false);
		setCurrentPlayer('X');
		setFields(new Array(9).fill(' '));
	};

	return (
		<GameLayout
			setGameEnded={setGameEnded}
			setIsDraw={setIsDraw}
			setCurrentPlayer={setCurrentPlayer}
			handleAgain={handleAgain}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			currentPlayer={currentPlayer}
			fields={fields}
		/>
	);
}

export default Game;
