import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD4f3HNqjbMip7MS241eFnHRgZHWqqHYPM',
  authDomain: 'assdsd-8809e.firebaseapp.com',
  databaseURL: 'https://assdsd-8809e.firebaseio.com',
  projectId: 'assdsd-8809e',
  storageBucket: 'assdsd-8809e.appspot.com',
  messagingSenderId: '1029957754763',
  appId: '1:1029957754763:web:20bdc18b6b1175685a598e'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
