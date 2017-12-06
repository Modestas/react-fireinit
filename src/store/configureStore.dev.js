import firebase from 'firebase';
import { reactReduxFirebase } from 'react-redux-firebase'
import { firebase as firebaseConfig, reduxFirebase as reduxFirebaseConfig } from 'configs';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';

firebase.initializeApp(firebaseConfig);

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      reactReduxFirebase(firebase, reduxFirebaseConfig),
      applyMiddleware(createLogger())
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
};

export default configureStore;
