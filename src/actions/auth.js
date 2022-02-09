import { app, googleAuthProvider } from '../firebase/config';
import { types } from '../types/authTypes';

export const googleLogin = () => {
	return (dispatch) => {
		app.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	};
};

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayName
		}
	};
};

export const passwordAndEmailLogin = (email, password) => {
	return (dispatch) => {
		app.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			})
			.catch((error) => console.log(error));
	};
};

export const register = (email, password, username) => {
	return (dispatch) => {
		app.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				try {
					await user.updateProfile({
						displayName: username
					});
				} catch (error) {
					console.log(error);
				}
				dispatch(login(user.uid, user.displayName));
			})
			.catch((error) => console.log(error));
	};
};

export const logout = () => {
	return async (dispatch) => {
		await app.auth().signOut();
		dispatch({ type: types.logout });
	};
};
