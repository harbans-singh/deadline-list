import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux"
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './config/firebaseConfig';
import { createFirestoreInstance } from 'redux-firestore';


const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({
  getFirebase
})));

// const rrfConfig = {
//   userProfile: 'users',
//   useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }

const rrfProps = {
  firebase,
  // config: rrfConfig,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}> 
          <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);