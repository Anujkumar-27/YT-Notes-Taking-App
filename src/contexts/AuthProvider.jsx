import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage, users as predefinedUsers } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState([])

    useEffect(() => {
        const storedUsers = getLocalStorage().users;
        if (storedUsers.length === 0) {
            setLocalStorage(predefinedUsers);
        }
        const { users } = getLocalStorage();
        setUserData(users);
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider