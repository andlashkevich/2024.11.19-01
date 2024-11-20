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
	let cp = props.currentPlayer;
	let ge = props.isGameEnded;
	let isd = props.isDraw;
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
		if (!isd && !ge && event.target.textContent === ' ') {
			fi[event.target.outerHTML[13]] = cp;
		}

		win.find((it) => cp === fi[it[0]] && cp === fi[it[1]] && cp === fi[it[2]])
			? sge(true)
			: !fi.includes(' ')
				? sid(true)
				: cp === '0'
					? scp('X')
					: scp('0');
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
