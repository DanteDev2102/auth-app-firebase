import React from 'react';
import { useSelector } from 'react-redux';
import FormAdd from '../components/FormAdd';
import Element from '../components/Element';

const AppScreen = () => {
	const name = useSelector(({ auth }) => auth.displayName);
	const nominas = useSelector((state) => state.nomina.nominaData);

	return (
		<div className="container animate__animated animate__zoomIn">
			<h1 className="center">Hola {name}</h1>
			<hr />
			<FormAdd />
			<table className="highlight">
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Pago</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>
					{nominas.map((nomina) => (
						<Element key={nomina.id} {...nomina} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AppScreen;
