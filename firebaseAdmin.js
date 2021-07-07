import admin from "firebase-admin"

import serviceAccount from "./serviceAccountKey.json"

export const verifyIdToken =(token)=>{
    if(!admin.apps.length){
    
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
    }

    return admin.auth().verifyIdToken(token).catch(error=>{throw error;})
}
export default admin;