import { Information } from './Components';
import { Fields } from './Components';
import styles from './App.module.css';
import { useState } from 'react';

const GameLayout = ({
	message,
	fields,
	currentPlayer,
	isGameEnded,
	setGameEnded,
	setCurrentPlayer,
	setIsDraw,
	handleAgain,
}) => (
	<div className={styles.App}>
		<h2>Крестики-нолики</h2>
		<Information message={message} />
		<Fields
			fields={fields}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
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
	let fields = new Array(9).fill('-');
	const handleAgain = () => {
		setIsDraw(false);
		setGameEnded(false);
		setCurrentPlayer('X');
		// fields = new Array(9).fill('-');
	};
	let message = 'А кто ходит?';
	console.log('game', fields);

	isDraw
		? (message = 'Ничья')
		: isGameEnded
			? (message = `Победа: ${currentPlayer}`)
			: (message = `Ходит: ${currentPlayer}`);

	return (
		<GameLayout
			setGameEnded={setGameEnded}
			setIsDraw={setIsDraw}
			setCurrentPlayer={setCurrentPlayer}
			handleAgain={handleAgain}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			message={message}
			fields={fields}
		/>
	);
}

export default Game;
