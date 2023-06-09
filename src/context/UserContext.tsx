import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { iPropsUserProvider, iUserContext, iUserProfile, iNewContactrequest, iContact } from "./type"
import { SubmitHandler } from "react-hook-form"
import { iLoginForm } from "../pages/login"
import { iNewContact } from "../components/modal/addContact/type"
import { ServiceContext } from "./ServiceContext"
import { iUpdateContactFormat } from "../components/modal/editContact/type"
import { iRegister } from "../pages/register"

export const UserContext = createContext({} as iUserContext)
export const UserProvider = ({ children }: iPropsUserProvider) => {
  const navigate = useNavigate()


  const { setAddContactModal, setViewContactModal, setEditContactModal } = useContext(ServiceContext)
  const [viewContact, setViewContact] = useState({} as iContact)
  const [userProfile, setUserProfile] = useState({} as iUserProfile)
  const [loadingButton, setLoadingButton] = useState(false)
  const [contacts, setContacts] = useState([] as iContact[])

  const onSubmitLogin: SubmitHandler<iLoginForm> = async (data) => {
    try {
      setLoadingButton(true)
      const response = await api.post("/login", data)
      toast.success("Login realizado com sucesso!")
      localStorage.setItem("@contacts:token", response.data.token)
      setUserProfile(response.data.user)
      navigate("/home")
    } catch (error) {
      toast.error("Ops! Algo deu errado, faça o login novamente")
    } finally {
      setLoadingButton(false)
    }
  }

  const createAccount = async (data: iRegister) => {
    try {
      const response = await api.post("/user", data)
      toast.success(`Usuário ${response.data.name} criado com sucesso`)
      navigate("/login")
    } catch (error) {
      console.log(error)
      console.log(error.response.data.message)
      if (error.response.data.message === "User aready exists") {
        toast.error("Este usuário já existe!")
      } else {
        toast.error(`${error.response.data.message}`)
      } 
    }
  }

  const requestContacts = async () => {
    try {
      const response = await api.get("/contacts", { headers: { Authorization: `Bearer: ${localStorage.getItem("@contacts:token")}` } })
      setContacts(response.data)
    } catch (error) {
      localStorage.clear()
      navigate("/login")
      toast.error("Houve um erro ao carregar seus contatos!")
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
      setAddContactModal(false)
      toast.success(`O novo contato ${createContatctResponse.data.name} foi salvo!`)
    } catch (error) {
      toast.error("Ops! Algo deu errado ao adicionar um novo contato")
    } finally {
      requestContacts()
    }
  }

  const updateContact = async (data: iUpdateContactFormat, id: string) => {
    try {
      await api.patch(`/contacts/${id}`, data, { headers: { Authorization: `Bearer: ${localStorage.getItem("@contacts:token")}` } })
      requestContacts()
      setViewContactModal(false)
      setEditContactModal(false)
      toast.success(`O contato ${data.name} foi atualizado!`)
    } catch (error) {
      toast.error(`Falha ao atualizar o contato ${data.name}`)
    }
  }

  const deleteContact = async (id: string, name: string) => {
    try {
      await api.delete(`/contacts/${id}`, { headers: { Authorization: `Bearer: ${localStorage.getItem("@contacts:token")}` } })
      requestContacts()
      setViewContactModal(false)
      toast.success(`O seu contato ${name} foi deletado`)
    } catch (error) {
      toast.error("Ops! Algo deu errado ao deletar o seu contato")
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
        createAccount,
        userProfile,
        setUserProfile,
        onSubmitNewContact,
        requestUser,
        viewContact,
        setViewContact,
        deleteContact,
        requestContacts,
        contacts,
        setContacts,
        updateContact,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}