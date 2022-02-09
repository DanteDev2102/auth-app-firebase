import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearRegistro } from '../actions/nomina';

const FormAdd = () => {
	const initialState = {
		pagoHora: '',
		horasTrabajadas: ''
	};
	const dispatch = useDispatch();
	const [viewForm, setViewForm] = useState(false);
	const [cantidadPago, setCantidadPago] = useState(initialState);
	const [error, setError] = useState(false);
	const { pagoHora, horasTrabajadas } = cantidadPago;

	const handleAdd = () => {
		setViewForm(!viewForm);
	};

	const handleChange = (e) => {
		setCantidadPago({
			...cantidadPago,
			[e.target.name]: e.target.value
		});
	};

	const calcularNomina = () => {
		const pago = pagoHora * horasTrabajadas;
		if (pago > 0) {
			dispatch(crearRegistro(pago));
			setCantidadPago(initialState);
			setError(false);
		} else {
			setError(true);
		}
	};

	return (
		<div>
			{!viewForm ? (
				<button onClick={handleAdd} className="btn purple">
					agregar
				</button>
			) : (
				<>
					<button onClick={handleAdd} className="btn red">
						cerrar
					</button>
					<br />
					<label>
						Pago
						<input
							type="text"
							placeholder="cantidad a pagar por hora"
							onChange={handleChange}
							name="pagoHora"
							value={pagoHora}
						/>
					</label>
					<label>
						Horas
						<input
							type="text"
							placeholder="cantidad de horas trabajadas"
							onChange={handleChange}
							name="horasTrabajadas"
							value={horasTrabajadas}
						/>
					</label>
					{error && (
						<h3 style={{ color: 'red' }}>
							Información invalida
						</h3>
					)}
					<button
						className="btn green"
						onClick={calcularNomina}
					>
						Calcular y guardar
					</button>
				</>
			)}
		</div>
	);
};

export default FormAdd;
