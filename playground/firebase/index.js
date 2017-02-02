import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzlN_g_dK7w7RS8ZzQaE4bbB87B-0m9DU",
  authDomain: "reacttodo-1fe2c.firebaseapp.com",
  databaseURL: "https://reacttodo-1fe2c.firebaseio.com",
  storageBucket: "reacttodo-1fe2c.appspot.com",
  messagingSenderId: "100115989711"
};
firebase.initializeApp(config);

var firebaseRef = firebase
  .database()
  .ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Terry',
    age: 55
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Todo 1'});

todosRef.push({text: 'Todo 2'});
