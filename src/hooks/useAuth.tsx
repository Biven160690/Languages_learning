import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';

import { LoginData, RegistrationData } from '@components/forms/type';
import { getCurrentUser } from '@helper';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface Context {
  currentUser: string;
  signIn: (data: LoginData) => Promise<UserCredential>;
  signUp: (data: RegistrationData) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = createContext({} as Context);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<string>(
    getCurrentUser('userId')
  );

  const auth = getAuth();

  const signUp = (data: RegistrationData) => {
    const { email, password } = data;

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (data: LoginData) => {
    const { email, password } = data;

    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setCurrentUser('');

    return signOut(auth);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signIn,
    signUp,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
