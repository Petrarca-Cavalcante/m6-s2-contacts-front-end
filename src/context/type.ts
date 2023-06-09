import React, { ReactNode } from "react"
import { iNewContact } from "../components/modal/addContact/type"
import { iUpdateContactFormat } from "../components/modal/editContact/type"
import { iRegister } from "../pages/register"

export interface iPropsUserProvider {
    children: ReactNode
}

export interface iPropsServiceProvider {
    children: ReactNode
}

export interface iUserContext {
    loadingButton: boolean
    setLoadingButton: React.Dispatch<React.SetStateAction<boolean>>,
    onSubmitLogin: (data: iLoginSubmit) => void
    onSubmitNewContact: (data: iNewContact) => void
    createAccount: (data: iRegister) => void
    userProfile: iUserProfile
    setUserProfile: React.Dispatch<React.SetStateAction<iUserProfile>>
    requestUser: () => void
    viewContact: iContact
    setViewContact: React.Dispatch<React.SetStateAction<iContact>>
    deleteContact: (id: string, name: string) => void
    requestContacts: () => void
    contacts: iContact[]
    setContacts: React.Dispatch<React.SetStateAction<iContact[]>>
    updateContact: (data: iUpdateContactFormat, id: string) => void
}

export interface iContact {
    id: string,
    name: string,
    emails: string[],
    telefones: string[],
    createdAt: string
}

export interface iUserProfile {
    token?: string
    user: {
        id: string,
        name: string,
        email: string,
        telefones: string[],
        createdAt: string,
        updatedAt: string,
        contacts: iContact[]
    }
}



export interface iLoginSubmit {
    email: string
    password: string
}

export interface iDefaultErrorResponse {
    message: string
}





export interface iServiceContext {
    addContactModal: boolean
    setAddContactModal: React.Dispatch<React.SetStateAction<boolean>>
    viewContactModal: boolean
    setViewContactModal: React.Dispatch<React.SetStateAction<boolean>>
    editContactModal: boolean
    setEditContactModal: React.Dispatch<React.SetStateAction<boolean>>
    contactToUpdate: iContact
    setContactToUpdate: React.Dispatch<React.SetStateAction<iContact>>
}


export interface iNewContactrequest {
    name: string
    telefones: string[]
    emails: string[]
}