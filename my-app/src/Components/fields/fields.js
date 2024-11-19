import styles from './fields.module.css';

const FieldLayout = ({ fields }) => (
	<div className={styles.container}>
		{fields.map((it, id) => {
			return <button className={styles.button}>{id + 'Х'}</button>;
		})}
	</div>
);

export const Fields = (props) => {
	let fields = props.fields;
	return <FieldLayout fields={fields} />;
};
// export function Fields(props) {
// 	let f = props.fields
// 	return (
// 		<div className={styles.container}>
// 			{f.map((it, id) => {
// 				return <button className={styles.button}>{id + 'Х'}</button>;
// 			})}
// 		</div>
// 	);
// }
