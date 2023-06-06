import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { iPropsUserProvider, iUserContext, iUserProfile, iDefaultErrorResponse, iNewContactrequest } from "./type"
import { SubmitHandler } from "react-hook-form"
import { iLoginForm } from "../pages/login"
import { iNewContact } from "../components/modal/addContact/type"
import { ServiceContext } from "./ServiceContext"

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iPropsUserProvider) => {
  const { setAddContactModal } = useContext(ServiceContext)


  const [userProfile, setUserProfile] = useState({} as iUserProfile)
  const [loadingButton, setLoadingButton] = useState(false)

  const navigate = useNavigate()
  const onSubmitLogin: SubmitHandler<iLoginForm> = async (data) => {
    try {
      setLoadingButton(true)
      const response = await api.post("/login", data)
      console.log(response)
      toast.success("Login realizado com sucesso!")
      localStorage.setItem("@contacts:token", response.data.token)
      localStorage.setItem(
        "@contacts:userId",
        JSON.stringify(response.data.user.id)
      )
      setUserProfile(response.data.user)
      navigate("/home")
    } catch (error) {

      toast.error("Ops! Algo deu errado, faça o login novamente")
    } finally {
      setLoadingButton(false)
    }
  }

  const onSubmitNewContact: SubmitHandler<iNewContact> = async (data) => {
    const newContact: iNewContactrequest = {
      name: data.name,
      emails: [data.email],
      telefones: [data.number]
    }
    try {
      const createContatctResponse = await api.post("/contacts", newContact, { headers: { Authorization: `Bearer: ${localStorage.getItem("@contacts:token")}` } })
      console.log(newContact, createContatctResponse.data)
      setAddContactModal(false)
      toast.success(`O novo contato ${newContact.name} foi salvo!`)
    } catch (error) {

      toast.error("Ops! Algo deu errado ao adicionar um novo contato")
    }
  }

  const requestUser = async () => {
    try {
      const token = localStorage.getItem("@contacts:token") || ""
      if (token === "") {
        navigate("/login")
      }
      const userRequest = await api.get("/user", { headers: { Authorization: `Bearer: ${token}` } })
      const userSetting = userRequest.data
      setUserProfile({
        user: userSetting,
        token: token
      })
    } catch (error) {
      toast.error("Erro no servidor, atualize a página")
    }
  }

  return (
    <UserContext.Provider
      value={{
        loadingButton,
        setLoadingButton,
        onSubmitLogin,
        userProfile,
        setUserProfile,
        onSubmitNewContact,
        requestUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}