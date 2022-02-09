import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

const AppScreen = lazy(() => import('../pages/AppScreen'));

const AppRouter = () => {
	return (
		<>
			<NavBar />
			<Suspense fallback={<h2>Loading...</h2>}>
				<Routes>
					<Route path="/app" element={<AppScreen />} />
					<Route
						path="*"
						element={<h2>ERROR 404 - NOT FOUND</h2>}
					/>
				</Routes>
			</Suspense>
		</>
	);
};

export default AppRouter;
