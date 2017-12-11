let cfg = process.env;

export default {
  apiKey: cfg.REACT_APP_FIREBASE_API_KEY,
  authDomain: cfg.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: cfg.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: cfg.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: cfg.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: cfg.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};