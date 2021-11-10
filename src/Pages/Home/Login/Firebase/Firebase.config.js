const firebaseConfig = {
    apiKey: process.envREACT_APP_API_KEY,
    authDomain: process.envREACT_APP_AUTH_DOMAIN,
    projectId: process.envREACT_APP_PROJECT_ID,
    storageBucket: process.envREACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.envREACT_APP_MESSAGING_SENDER_ID,
    appId: process.envREACT_APP_APP_ID,
};
export default firebaseConfig;