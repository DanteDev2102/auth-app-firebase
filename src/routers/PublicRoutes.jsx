import { Navigate } from 'react-router';

const PublicRoutes = ({ children, log }) => {
	return !log ? children : <Navigate to="/app" />;
};

export default PublicRoutes;
