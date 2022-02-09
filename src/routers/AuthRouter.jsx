import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import { app } from '../firebase/config';
import { login } from '../actions/auth';
import LoginScreen from '../pages/LoginScreen';
import Register from '../pages/Register';
import AppRouter from './AppRouter';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { loadData } from '../helpers/loadData';
import { leerRegistro } from '../actions/nomina';

const AuthRouters = () => {
	const dispatch = useDispatch();

	const [log, setLog] = useState(false);

	useEffect(() => {
		app.auth().onAuthStateChanged(async (user) => {
			user && dispatch(login(user.uid, user.displayName));
			user ? setLog(true) : setLog(false);
			const nominaData = await loadData(user.uid);
			dispatch(leerRegistro(nominaData));
		});
	}, [dispatch]);

	return (
		<Router>
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRoutes log={log}>
							<LoginScreen />
						</PublicRoutes>
					}
				/>
				<Route
					path="/register"
					element={
						<PublicRoutes log={log}>
							<Register />
						</PublicRoutes>
					}
				/>
				<Route
					path="*"
					element={
						<PrivateRoutes log={log}>
							<AppRouter />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</Router>
	);
};

export default AuthRouters;
