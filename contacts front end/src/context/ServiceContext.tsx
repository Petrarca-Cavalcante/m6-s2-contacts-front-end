import { createContext, useState } from "react";
import { iServiceContext, iPropsServiceProvider } from "./type";

export const ServiceContext = createContext({} as iServiceContext);

export const ServiceProvider = ({ children }: iPropsServiceProvider) => {
    const [addContactModal, setAddContactModal] = useState<boolean>(Boolean)
    const [ viewContactModal, setViewContactModal ] = useState<boolean>(Boolean)

    return (
        <ServiceContext.Provider
            value={{
                addContactModal,
                setAddContactModal,
                setViewContactModal,
                viewContactModal
            }}
        >
            {children}
        </ServiceContext.Provider>
    )
}