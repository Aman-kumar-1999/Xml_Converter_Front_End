import {createContext, useContext} from "react"

export const UserContext = createContext({
    user: [],
    addUser: (user) => {},
    updateUser: (id, user) => {},
    deleteUser: (id) => {}
})


export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = UserContext.Provider