import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/auth';

const Register = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		email: '',
		password: '',
		passwordConfirm: '',
		username: ''
	});

	const { email, password, passwordConfirm, username } = data;

	const handleChange = (e) => {
		const value = e.target.value;
		setData({ ...data, [e.target.name]: value });
	};

	const handleRegister = (e) => {
		e.preventDefault();
		if (email.trim() === '' || !email.trim().includes('@')) {
			return;
		}
		if (username.trim().length <= 2) return;
		if (password.length < 6) return;
		if (passwordConfirm !== password) return;
		dispatch(register(email, password, username));
	};
	return (
		<div className="container animate__animated animate__zoomIn">
			<h2>Register</h2>
			<hr />
			<div className="row container">
				<form onSubmit={handleRegister} className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<i className="material-icons prefix">
								email
							</i>
							<input
								autoComplete="off"
								onChange={handleChange}
								value={email}
								type="email"
								id="icon_prefix1"
								className="materialize-textarea"
								name="email"
							/>
							<label htmlFor="icon_prefix1">
								Email
							</label>
						</div>
						<div className="input-field col s12">
							<i className="material-icons prefix">
								assignment_ind
							</i>
							<input
								autoComplete="off"
								onChange={handleChange}
								value={username}
								type="text"
								id="icon_prefix3"
								className="materialize-textarea"
								name="username"
							/>
							<label htmlFor="icon_prefix3">
								username
							</label>
						</div>
						<div className="input-field col s12">
							<i className="material-icons prefix">
								vpn_key
							</i>
							<input
								autoComplete="off"
								onChange={handleChange}
								value={password}
								type="password"
								id="icon_prefix4"
								className="materialize-input"
								name="password"
							/>
							<label htmlFor="icon_prefix4">
								Password
							</label>
						</div>
						<div className="input-field col s12">
							<i className="material-icons prefix">
								vpn_key
							</i>
							<input
								autoComplete="off"
								onChange={handleChange}
								value={passwordConfirm}
								type="password"
								id="icon_prefix5"
								className="materialize-textarea"
								name="passwordConfirm"
							/>
							<label htmlFor="icon_prefix5">
								Confirm Password
							</label>
						</div>
					</div>

					<button
						className="btn waves-effect waves-light"
						type="submit"
						name="action"
					>
						Register
						<i className="material-icons right">send</i>
					</button>
					<hr />

					<Link to="/login">login into account</Link>
				</form>
			</div>
		</div>
	);
};

export default Register;
