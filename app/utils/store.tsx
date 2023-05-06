'use client'
import { createContext, useReducer } from "react";

export const Store = createContext<any>({});

export const initialState = {
    user: {
        name: "admin"
    }
}


const reducer = (state:any, { type, payload }: any) => {
    switch (type) {
        case "first":
        return { ...state, ...payload }
        default:
        return state
    }
}
    
export const StoreProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}