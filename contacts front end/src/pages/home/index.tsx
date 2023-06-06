import { useContext, useEffect } from "react"
import { StyledHome } from "./style"
import { UserContext } from "../../context/UserContext"
import { RotatingLines } from "react-loader-spinner"
import { AddContactModal } from "../../components/modal/addContact"
import { ServiceContext } from "../../context/ServiceContext"
import { FiLogOut } from "react-icons/fi"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { ViewContactModal } from "../../components/modal/viewContact"
import { IoPersonAddOutline } from "react-icons/io5"
import { AiOutlineEye } from "react-icons/ai"


export const Home = () => {
  const { userProfile, requestUser, setViewContact, requestContacts, contacts } = useContext(UserContext)
  const { setAddContactModal, setViewContactModal } = useContext(ServiceContext)
  useEffect(() => {
    requestUser()
    requestContacts()
  }, [])
  const navigate = useNavigate()

  const logout = () => {
    navigate("/login")
    localStorage.clear()
    toast.success("Logout feito com sucesso")
  }

  return (
    <StyledHome>
      <AddContactModal />
      <ViewContactModal />
      {userProfile.user ? (
        <div className="user-card">
          <div className="user-container">
            <h2>{userProfile.user.name}</h2>
            <div>{userProfile.user.email}</div>
          </div>
          <div className="logout-container">
            <FiLogOut onClick={() => logout()} id="FiLogOut" />
          </div>
        </div>
      ) : (
        <RotatingLines width="40px" strokeColor="black" />
      )}
      {userProfile.user ? (
        <div className="contact-container">
          <div className="add-contact-session"><p>Contatos</p><IoPersonAddOutline onClick={() => setAddContactModal(true)} className="add-contact-btn" /></div>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id} onClick={() => { setViewContact(contact); setViewContactModal(true) }}> <p>{contact.name}</p> <AiOutlineEye /></li>
            ))}
          </ul>
        </div>
      ) : (
        <div><p>Não há contatos</p></div>
      )}
    </StyledHome>
  )
}