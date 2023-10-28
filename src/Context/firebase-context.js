import { createContext,useState,useEffect} from "react";
import { onAuthStateChangedListener,  createUserDocRef} from "./firebase";

export const UserContext = createContext({
    currentUsrer: null,
    setCurrentuser: () => null
});


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if(user) {
                const userData = await createUserDocRef(user);
                setCurrentUser({...user, ...userData})
            } else {
                setCurrentUser(null)
            }
        })
        return() => unsubscribe();
    },[])

    const value = {setCurrentUser, currentUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
