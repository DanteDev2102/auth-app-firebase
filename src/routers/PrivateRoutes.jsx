import { Navigate } from 'react-router';

const PrivateRoutes = ({ children, log }) => {
	return log ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
