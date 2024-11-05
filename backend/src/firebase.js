import admin from 'firebase-admin';

import serviceAccount from '../serviceAccountKey.json' assert { type: 'json' };;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
     databaseURL: "https://<CadEx>.firebaseio.com"
});

const db = admin.firestore();
export { db , admin };