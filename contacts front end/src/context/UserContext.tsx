import { createContext, useState} from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { iPropsUserProvider, iUserContext, iUserProfile, iDefaultErrorResponse } from "./type";
import { SubmitHandler } from "react-hook-form";
import { iLoginForm } from "../pages/login";

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iPropsUserProvider) => {
    const [userProfile, setUserProfile] = useState({} as iUserProfile)
    const [loadingButton, setLoadingButton] = useState(false);

    const navigate = useNavigate();
    const onSubmitLogin: SubmitHandler<iLoginForm> = async (data) => {
        try {
          setLoadingButton(true);
          const response = await api.post("/login", data);
          console.log(response)
          toast.success("Login realizado com sucesso!");
          localStorage.setItem("@contacts:token", response.data.token);
          localStorage.setItem(
            "@contacts:userId",
            JSON.stringify(response.data.user.id)
          );
          setUserProfile(response.data.user);    
          navigate("/home");
        } catch (error) {

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