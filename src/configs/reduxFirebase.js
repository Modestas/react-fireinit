let cfg = process.env;

export default {
  //userProfile: 'users', // root that user profiles are written to
  // updateProfileOnLogin: false, // enable/disable updating of profile on login
  enableLogging: cfg.REACT_APP_REDUX_FIREBASE_ENABLE_LOGGING === "true", // enable/disable Firebase Database Logging
  // presence: 'presence',
  // autoPopulateProfile: true, // keep auto population of profile from v1
  // profileParamsToPopulate: [
  //   // create queries for profile population (remember to use populate)
  //   { child: 'cars', root: 'cars' }
  // ],
  // useFirestoreForProfile: true, // Use Firestore to store profile
  // profileParamsToPopulate: [{ child: 'cars', root: 'cars' }] // gather data for populating profile params
  // profileDecorator: (userData) => ({ email: userData.email }) // customize format of user profile
};