import React from 'react';
import { useDispatch } from 'react-redux';
import { borrarRegistro } from '../actions/nomina';

const Element = ({ pago, id, fecha }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(borrarRegistro(id));
	};

	let fechaFormato = fecha;

	if (fecha.seconds) {
		const date = fecha.toDate();
		fechaFormato = date.toLocaleDateString();
	}

	return (
		<tr className="animate__animated animate__fadeInUp">
			<td>{fechaFormato}</td>
			<td>{pago}$</td>
			<td>
				<button className="btn red" onClick={handleDelete}>
					<i className="material-icons">delete_forever</i>
				</button>
			</td>
		</tr>
	);
};

export default Element;
