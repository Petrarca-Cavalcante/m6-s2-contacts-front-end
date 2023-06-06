import { createContext, useState } from "react";
import { iServiceContext, iPropsServiceProvider, iContact } from "./type";

export const ServiceContext = createContext({} as iServiceContext);

export const ServiceProvider = ({ children }: iPropsServiceProvider) => {
    const [addContactModal, setAddContactModal] = useState<boolean>(Boolean)
    const [viewContactModal, setViewContactModal] = useState<boolean>(Boolean)
    const [editContactModal, setEditContactModal] = useState<boolean>(Boolean)
    const [contactToUpdate, setContactToUpdate] = useState<iContact>({} as iContact)

    return (
        <ServiceContext.Provider
            value={{
                addContactModal,
                setAddContactModal,
                setViewContactModal,
                viewContactModal,
                editContactModal,
                setEditContactModal,
                contactToUpdate,
                setContactToUpdate
            }}
        >
            {children}
        </ServiceContext.Provider>
    )
}