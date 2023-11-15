import { createContext, useState } from "react";

const gameContext = createContext()

export const ContextProvider = ({ children }) => {
    const [ size, setSize ] = useState(25)

    return (
        <ContextProvider value={{ size, setSize }}>
            { children }
        </ContextProvider>
    )
}