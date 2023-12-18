import {createContext, useContext} from "react"

export const LoginContext = createContext({
    // user: [],
    // addUser: (user) => {},
    // updateUser: (id, user) => {},
    // deleteUser: (id) => {}

    // formData: [],
    isLogin: () => {},
    setIsLogin: (temp) =>{},
    // isLogin: Boolean,
    // setIsLogin: Boolean,
    // isLogin: ()=> {},
    // login: (formData) => {},
    logout: () => {}
})


export const useLogin = () => {
    return useContext(LoginContext)
}

export const LoginProvider = LoginContext.Provider