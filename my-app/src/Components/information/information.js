import styles from './information.module.css';

const InformationLayout = () => (
	<div className={styles.information}>Очередь ходить крестиком</div>
);

export const Information = (props) => {
	return <InformationLayout />;
};
