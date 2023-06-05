import { useContext, useEffect } from "react"
import { toast } from "react-toastify"
import { StyledHome } from "./style"
import { api } from "../../services/api"
import { UserContext } from "../../context/UserContext"
import { RotatingLines } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const { userProfile, setUserProfile } = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    const requestUser = async () => {
      try {
        const token = localStorage.getItem("@contacts:token") || ""
        if(token === "") {
          navigate("/login")
        }
        const userRequest = await api.get("/user", { headers: { Authorization: `Bearer: ${token}` } });
        const userSetting = userRequest.data
        setUserProfile({
          user: userSetting,
          token: token
        })
      } catch (error) {
        toast.error("Erro no servidor, atualize a página");
      }
    };
    requestUser()
  }, [])

  return (
    <StyledHome>
      {userProfile.user ? (
        <div className="user-card">
          <h2>{userProfile.user.name}</h2>
          <div>{userProfile.user.email}</div>

        </div>
      ) : (
        <RotatingLines width="40px" strokeColor="black" />
      )}
      {userProfile.user ? (
        <div className="contact-container">
          <div className="add-contact-session"><p>Contatos</p><button className="add-contact-btn">+</button></div>
          <ul>
            {userProfile.user.contacts.map((contact) => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div><p>Não há contatos</p></div>
      )}
    </StyledHome>
  )
}