import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { googleLogin, passwordAndEmailLogin } from '../actions/auth';

import GoogleButton from 'react-google-button';

const LoginScreen = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = data;

	const handleChange = (e) => {
		const value = e.target.value;
		setData({ ...data, [e.target.name]: value });
	};

	const handleGoogleLogin = () => {
		dispatch(googleLogin());
	};

	const handleEmailAndPasswordLogin = (e) => {
		e.preventDefault();
		if (email.trim() === '' || !email.trim().includes('@')) {
			return;
		}
		if (password.length <= 2) return;
		dispatch(passwordAndEmailLogin(email, password));
	};

	return (
		<div className="container animate__animated animate__zoomIn">
			<h2>Login</h2>
			<hr />
			<div className="row container">
				<form
					onSubmit={handleEmailAndPasswordLogin}
					className="col s12"
				>
					<div className="row">
						<div className="input-field col s12">
							<i className="material-icons prefix">
								email
							</i>
							<input
								onChange={handleChange}
								type="email"
								id="icon_prefix2"
								className="materialize-textarea"
								name="email"
							/>
							<label htmlFor="icon_prefix2">
								Email
							</label>
						</div>
						<div className="input-field col s12">
							<i className="material-icons prefix">
								vpn_key
							</i>
							<input
								onChange={handleChange}
								type="password"
								id="icon_prefix"
								className="materialize-textarea"
								name="password"
							/>
							<label htmlFor="icon_prefix">
								Password
							</label>
						</div>
					</div>

					<button
						className="btn waves-effect waves-light"
						type="submit"
						name="action"
					>
						Login
						<i className="material-icons right">send</i>
					</button>
					<hr />
					<GoogleButton onClick={handleGoogleLogin} />
					<Link to="/register">
						register in the platform
					</Link>
				</form>
			</div>
		</div>
	);
};

export default LoginScreen;
