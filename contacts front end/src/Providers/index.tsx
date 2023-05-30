import { iProviders } from "./type"
import { UserProvider } from "../context/UserContext"
import { ServiceProvider } from "../context/ServiceContext"


export const Providers = ({children}:iProviders) => {
    return(
        <ServiceProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </ServiceProvider>
    )
}