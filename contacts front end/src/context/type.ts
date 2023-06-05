import React, { ReactNode } from "react";

export interface iPropsUserProvider {
    children: ReactNode
}

export interface iPropsServiceProvider {
    children: ReactNode
}

export interface iUserContext {
    loadingButton: boolean;
    setLoadingButton: React.Dispatch<React.SetStateAction<boolean>>,
    onSubmitLogin: (data: iLoginSubmit) => void;
    userProfile: iUserProfile;
    setUserProfile: React.Dispatch<React.SetStateAction<iUserProfile>>
}

export interface iContact {
    id: string,
    name: string,
    emails: string[],
    telefones: string[],
    createdAt: string
}

export interface iUserProfile {
    token?: string;
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
    email: string;
    password: string;
}

export interface iDefaultErrorResponse {
    message: string;
}





export interface iServiceContext {
    testState: boolean
    setTestState: React.Dispatch<React.SetStateAction<boolean>>
}