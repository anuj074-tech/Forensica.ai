import {initializeApp, getApps, getApp, FirebaseApp} from 'firebase/app';
import {getAuth, Auth} from 'firebase/auth';
import {getFirestore, Firestore} from 'firebase/firestore';
import {firebaseConfig} from './config';

interface FirebaseInstances {
  app: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

export function initializeFirebase(): FirebaseInstances {
    if (typeof window === 'undefined') {
        return { app: null, auth: null, firestore: null };
    }
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    return { app, auth, firestore };
}


export {FirebaseProvider} from './provider';
export {FirebaseClientProvider} from './client-provider';
export {useUser} from './auth/use-user';
export {useFirebase, useFirebaseApp, useAuth, useFirestore} from './provider';
