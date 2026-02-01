'use client';

import {ReactNode} from 'react';
import {FirebaseProvider} from './provider';
import {initializeFirebase} from './index';

// Initialize Firebase on the client
const firebaseInstance = initializeFirebase();

export function FirebaseClientProvider({children}: {children: ReactNode}) {
  return <FirebaseProvider value={firebaseInstance}>{children}</FirebaseProvider>;
}
