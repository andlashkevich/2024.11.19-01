import PropTypes from 'prop-types';
import styles from './information.module.css';

const InformationLayout = ({ message }) => (
	<div className={styles.information}>{message}</div>
);
InformationLayout.propTypes = {
	message: PropTypes.string,
};

export const Information = (props) => {
	let isd = props.isDraw;
	let ge = props.isGameEnded;
	let cp = props.currentPlayer;
	let message = '';

	isd
		? (message = 'Ничья')
		: ge
			? (message = `Победа: ${cp}`)
			: (message = `Ходит: ${cp}`);
	return <InformationLayout message={message} />;
};
Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
