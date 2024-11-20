import PropTypes from 'prop-types';
import styles from './information.module.css';

const InformationLayout = ({ message }) => (
	<div className={styles.information}>{message}</div>
);
InformationLayout.propTypes = {
	message: PropTypes.string,
};

export const Information = (props) => {
	let message = props.message;
	return <InformationLayout message={message} />;
};
Information.propTypes = {
	message: PropTypes.string,
};
