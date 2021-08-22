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
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import LinearProgress from '@material-ui/core/LinearProgress';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({
  getFirebase
})));

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth))
    return (
    <div>
      <LinearProgress />
    </div>
    );
  return children;
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded> 
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);