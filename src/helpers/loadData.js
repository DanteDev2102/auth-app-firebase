import { db } from '../firebase/config';

export const loadData = async (uid) => {
	const response = await db.collection(`${uid}/nomina/list`).get();
	const data = [];
	response.forEach((nomina) => {
		const nominaData = nomina.data();
		data.push({
			id: nomina.id,
			...nominaData
		});
	});
	return data;
};
