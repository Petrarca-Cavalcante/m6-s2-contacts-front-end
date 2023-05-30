import { createContext, useState} from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { iPropsUserProvider, iUserContext, iUserProfile, iDefaultErrorResponse } from "./type";
import { SubmitHandler } from "react-hook-form";
import { iLoginForm } from "../pages/login";
import { AxiosError } from "axios";


export const UserContext = createContext({} as iUserContext)


export const UserProvider = ({ children }: iPropsUserProvider) => {
    const [userProfile, setUserProfile] = useState({} as iUserProfile)
    const [loadingButton, setLoadingButton] = useState(false);

    const navigate = useNavigate();
    const onSubmitLogin: SubmitHandler<iLoginForm> = async (data) => {
        try {
          setLoadingButton(true);
          const response = await api.post("/login", data);
          toast.success("Login realizado com sucesso!");
          localStorage.setItem("@contacts:token", response.data.token);
          localStorage.setItem(
            "@contacts:userId",
            JSON.stringify(response.data.user.id)
          );
          setUserProfile(response.data.user);
          // requestRegisteredUserServices();
          // setTokenIsValid(true);
          // setUserValid(true);
    
          navigate("/home");
        } catch (error) {
          const currentError = error as AxiosError<iDefaultErrorResponse>;
          console.error(currentError.response?.data);
          console.log(currentError)
          toast.error("Ops! Algo deu errado, faça o login novamente");
        } finally {
          setLoadingButton(false);
        }
      };



    return (
        <UserContext.Provider
            value={{
                loadingButton,
                setLoadingButton,
                onSubmitLogin,
                userProfile,
                setUserProfile
            }}
        >
            {children}
        </UserContext.Provider>
    )
}