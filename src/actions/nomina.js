import { db } from '../firebase/config';
import { types } from '../types/authTypes';

export const crearRegistro = (pago) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const datos = {
			fecha: new Date().toLocaleDateString(),
			pago
		};
		const referencia = await db
			.collection(`${uid}/nomina/list`)
			.add(datos);
		const id = referencia.id;
		const newData = {
			...datos,
			id
		};
		dispatch(crear(newData));
	};
};

export const leerRegistro = (data) => {
	return {
		type: types.nominaRead,
		payload: data
	};
};

export const crear = (data) => {
	return {
		type: types.nominaAdd,
		payload: data
	};
};

export const borrarRegistro = (id) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		dispatch(borrar(id));
		await db.doc(`${uid}/nomina/list/${id}`).delete();
	};
};

export const borrar = (id) => {
	return {
		type: types.nominaDelete,
		payload: id
	};
};

export const limpiar = () => {
	return {
		type: types.nominaClean
	};
};
