import firebase from "firebase/compat/app";
// import { FirebaseApp } from "@firebase/app";
import { FirebaseApp, getApps, initializeApp} from "@firebase/app";
import "firebase/compat/auth";
import "firebase/firestore";
import { getAnalytics, initializeAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

var app: FirebaseApp;

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

// const app = firebase.initializeApp(clientCredentials);

// export const auth = firebase.auth(app);
// export const analytics = getAnalytics(app);
// export const firestore = firebase.firestore();

// if (getApps().length) {
//   //@ts-ignore
//   app = getApps();
// } else {
//   app = initializeApp(clientCredentials);
// }

export default firebase;
