import firebase from 'firebase';
import { reactReduxFirebase } from 'react-redux-firebase'
import { firebase as firebaseConfig, reduxFirebase as reduxFirebaseConfig } from 'configs';
import { createStore, compose } from 'redux';
import rootReducer from 'reducers';

firebase.initializeApp(firebaseConfig);

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  compose(
    reactReduxFirebase(firebase, reduxFirebaseConfig)
  )
);

export default configureStore;
