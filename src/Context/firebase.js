
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwwK50JhFbwKqlTF4BGOEKxLQbc6tK8kU",
  authDomain: "easypay-955e6.firebaseapp.com",
  projectId: "easypay-955e6",
  storageBucket: "easypay-955e6.appspot.com",
  messagingSenderId: "739628781724",
  appId: "1:739628781724:web:0ed9cab3bd3293b46d5d59",
  measurementId: "G-NDMVP2WD0W"
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

const auth = getAuth(app); 
const db = getFirestore(app); 

export const createGoogleUserAuth = () => signInWithPopup(auth, googleProvider);

export const createUserDocRef = async (userAuth) => {
  if (!userAuth) return null;
  try {
    const UserDocRef = doc(db, "users", userAuth.uid);
    const userSnapShot = await getDoc(UserDocRef);

    if (userSnapShot.exists()) {
      return userSnapShot.data();
    }
    return null;
  } catch (error) {
    if (error.message.includes("client is offline")) {
      console.error("Firebase client is offline. Please check your internet connection.");
    } else {
      console.error("An error occurred:", error.message);
    }
    return null;
  }
};

export const createUserwithEandP = async (email, password) => {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const SignInWithEandP = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const getUserInfo = async (userId) => {
  if (!userId) return;

  const userDocRef = doc(db, "users", userId);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) return;

  const userData = userSnapshot.data();
  const hasVirtualAccount = userData.virtualAccountId !== undefined;

  return { ...userData, hasVirtualAccount };
};

export const updateUserInfo = async (userId, displayName, address) => {
  if (!userId) return;

  const userDocRef = doc(db, "users", userId);

  try {
    await updateDoc(userDocRef, {
      displayName: displayName,
      address: address || '',
    });
  } catch (error) {
    console.log("Error updating user:", error.message);
  }

  return userDocRef;
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);





























// import { initializeApp } from "firebase/app";
// import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth"
// import {doc,getDoc, getFirestore} from "firebase/firestore"


// const firebaseConfig = {
//   apiKey: "AIzaSyAwwK50JhFbwKqlTF4BGOEKxLQbc6tK8kU",
//   authDomain: "easypay-955e6.firebaseapp.com",
//   projectId: "easypay-955e6",
//   storageBucket: "easypay-955e6.appspot.com",
//   messagingSenderId: "739628781724",
//   appId: "1:739628781724:web:0ed9cab3bd3293b46d5d59",
//   measurementId: "G-NDMVP2WD0W"
// };


//  initializeApp(firebaseConfig);
// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({
//     prompt: "select_account"
// })

// export const auth = getAuth();
// export const createGoogleUserAuth = () => signInWithPopup(auth, googleProvider);
// const db = getFirestore();

// // export const createUserDocRef = async (userAuth) =>{
// //     if(!userAuth) return null;
// //     const UserDocRef = doc(db, "users", userAuth.uid)
// //     const userSnapShot = await getDoc(UserDocRef);
// //     if(userSnapShot.exists()) {
// //         return userSnapShot.data();
// //     }
// //     return null;
// // };


// export const createUserDocRef = async (userAuth) => {
//     if (!userAuth) return null;
//     try {
//         const UserDocRef = doc(db, "users", userAuth.uid);
//         const userSnapShot = await getDoc(UserDocRef);

//         if (userSnapShot.exists()) {
//             return userSnapShot.data();
//         }
//         return null;
//     } catch (error) {
     
//         if (error.message.includes("client is offline")) {
//             console.error("Firebase client is offline. Please check your internet connection.");
//         } else {
//             console.error("An error occurred:", error.message);
//         }
//         return null;
//     }
// };


// export const createUserwithEandP = async (email, password) => {
//     if (!email || !password) {
//         throw new Error("Email and password are required.");
//     }

//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         return userCredential.user; 
//     } catch (error) {
//         throw error; 
//     }
// };

// export const SignInWithEandP = async (email, password) => {
//     if(!email || !password) return;
//     return await signInWithEmailAndPassword (auth, email, password)
// };

// export const getUserInfo = async (userId) => {
//     if (!userId) return;
  
//     const userDocRef = doc(db, "users", userId);
//     const userSnapshot = await getDoc(userDocRef);
  
//     if (!userSnapshot.exists()) return;
  
//     const userData = userSnapshot.data();
//     const hasVirtualAccount = userData.virtualAccountId !== undefined;
  
//     return { ...userData, hasVirtualAccount };
//   };


//   export const updateUserInfo = async (userId, displayName, address) => {
//     if (!userId) return;
  
//     const userDocRef = doc(db, "users", userId);
  
//     try {
//       await updateDoc(userDocRef, {
//         displayName: displayName,
//         address: address || '',
//       });
//     } catch (error) {
//       console.log("catching error updating user", error.message);
//     }
  
//     return userDocRef;
//   };


// export const SignOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)