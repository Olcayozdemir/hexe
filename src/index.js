import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./reducers/index";
import App from "./view/App";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase'
import GlobalStyleTheme from "./view/styles/global";

const firebaseConfig = {
  apiKey: "AIzaSyCp64qjX52N3x8E6DnLJIJpA_yS3M8sdEs",
  authDomain: "hexe-9833b.firebaseapp.com",
  projectId: "hexe-9833b",
  storageBucket: "hexe-9833b.appspot.com",
  messagingSenderId: "1008668045312",
  appId: "1:1008668045312:web:b344975b04151deb50a8e5",
  measurementId: "G-JBPW5BX8H2"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const middlewares = [
  thunk.withExtraArgument(getFirebase)
]

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middlewares),
));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyleTheme />
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);