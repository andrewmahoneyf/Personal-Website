/* Initializing firebase */
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'personal-website-5e1cc.firebaseapp.com',
  databaseURL: 'https://personal-website-5e1cc.firebaseio.com',
  projectId: 'personal-website-5e1cc',
  storageBucket: 'personal-website-5e1cc.appspot.com',
  messagingSenderId: '733781301256',
  appId: '1:733781301256:web:9f714079e44abab5',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

/** ***************************************************
 * CONTACT
 **************************************************** */
export const sendMessage = (first, last, email, phone, company, message) =>
  db
    .collection('messages')
    .doc(email)
    .collection('emails')
    .doc()
    .set({
      name: `${first} ${last}`,
      email,
      phone,
      company,
      message,
    })
    .then(() => console.log('Document successfully written!'))
    .catch(error => console.error('Error writing document: ', error));
