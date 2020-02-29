import * as firebase from 'firebase';

const fireBaseConfig = {
    apiKey: 'AIzaSyDTJMu1w1YeZAxLWyAKZKIUkAsgVJvHGqg',
    authDomain: 'fir-firestore-6c9a8.firebaseapp.com',
    databaseURL: 'https://fir-firestore-6c9a8.firebaseio.com',
    projectId: 'fir-firestore-6c9a8',
    storageBucket: 'fir-firestore-6c9a8.appspot.com',
    messagingSenderId: '910295251858',
    appId: '1:910295251858:web:e46d868046bd30e7bedf4b'
};

const app = firebase.initializeApp(fireBaseConfig);

export const auth = app.auth();
export const store = app.firestore();
export const storage = app.storage();
