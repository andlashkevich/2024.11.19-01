import PropTypes from 'prop-types';
import styles from './fields.module.css';

const FieldLayout = ({ fields, handleStep }) => (
	<div className={styles.container}>
		{fields.map((it, id) => {
			return (
				<button
					ind={id}
					key={String(Date.now()) + String(Math.random())}
					className={styles.button}
					onClick={handleStep}
				>
					{it}
				</button>
			);
		})}
	</div>
);
FieldLayout.propTypes = {
	handleStep: PropTypes.func,
	fields: PropTypes.array,
};
export const Fields = (props) => {
	let fi = props.fields;
	let pl = props.currentPlayer;
	let ge = props.isGameEnded;
	let sge = props.setGameEnded;
	let scp = props.setCurrentPlayer;
	let sid = props.setIsDraw;
	let win = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const handleStep = (event) => {
		if (!ge && event.target.textContent === '-') {
			event.target.textContent = pl;
			fi[event.target.outerHTML[13]] = pl;
		}

		if (win.find((it) => pl === fi[it[0]] && pl === fi[it[1]] && pl === fi[it[2]]))
			sge(true);
		if (!fi.includes('-')) sid(true);
		if (pl === '0') scp('X');
	};

	return <FieldLayout fields={fi} handleStep={handleStep} />;
};
Fields.propTypes = {
	fields: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	setCurrentPlayer: PropTypes.func,
	setGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
};
