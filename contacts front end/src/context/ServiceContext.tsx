import { createContext, useEffect, useState } from "react";
import { iServiceContext, iPropsServiceProvider, iContact } from "./type";
import { useLocation, useNavigate } from "react-router-dom";

export const ServiceContext = createContext({} as iServiceContext);

export const ServiceProvider = ({ children }: iPropsServiceProvider) => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        const autologin = () => {
            const token = localStorage.getItem("@contacts:token");
            if (!token && location.pathname === "/home") {
                navigate("/login");
                return;
            }
            if (
                (location.pathname === "/register" || location.pathname === "/login") && token) {
                navigate("/home");
                return;
            }
        };
        autologin()
    }, [])


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