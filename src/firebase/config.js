import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCgrxmV4Z9xxM7wqP_utUaguEzbSz0xc4U',
	authDomain: 'auth-app-8cbf6.firebaseapp.com',
	projectId: 'auth-app-8cbf6',
	storageBucket: 'auth-app-8cbf6.appspot.com',
	messagingSenderId: '144244831691',
	appId: '1:144244831691:web:eda53aea8a712f28ce324e'
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { app, db, googleAuthProvider };
