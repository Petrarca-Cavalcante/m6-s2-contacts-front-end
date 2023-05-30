import { createContext, useState } from "react";
import { iServiceContext, iPropsServiceProvider } from "./type";

export const ServiceContext = createContext({} as iServiceContext);

export const ServiceProvider = ({ children }: iPropsServiceProvider) => {
    const [testState, setTestState] = useState<boolean>(true)
    return (
        <ServiceContext.Provider
            value={{
                testState,
                setTestState
            }}
        >
            {children}
        </ServiceContext.Provider>
    )
}