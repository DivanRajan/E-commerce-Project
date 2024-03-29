

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});


  function logOut() {
    return signOut(auth);
  }


  function setUpRecaptha(number) {
    // const recaptchaContainer = document.getElementById('recaptcha-container');
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
      callback: () => {
          console.log('recaptcha resolved..')
      }
  });

//   const recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {
//     'callback': (response) => {
//       console.log("prepared phone auth process");
//     }
//   }, auth);
      
  
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }
  
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
        // logOut();
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logOut,
        setUpRecaptha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}