import { types } from '../types/authTypes';

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return action.payload;
		case types.logout:
			return {};
		default:
			return state;
	}
};

export default authReducer;
