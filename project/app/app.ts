import { Application } from '@nativescript/core';
import { firebase } from '@nativescript/firebase-core';

// Initialize Firebase
firebase().initializeApp({
  // Your Firebase config will go here
}).then(() => {
  console.log('Firebase initialized successfully');
}).catch(error => {
  console.error('Firebase initialization error:', error);
});

Application.run({ moduleName: 'app-root' });