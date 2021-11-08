import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyCNpwdAVlSVupOvK-5SFdcT8qnI-w6FfXE',
  authDomain: 'complaint-forum-5da77.firebaseapp.com',
  projectId: 'complaint-forum-5da77',
  storageBucket: 'complaint-forum-5da77.appspot.com',
  messagingSenderId: '1054154354881',
  appId: '1:1054154354881:web:6e0e62eeb902e57d70a440',
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
