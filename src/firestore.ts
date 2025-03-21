import * as admin from "firebase-admin";
const serviceAccount = require("./config/key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();

export default firestore;
